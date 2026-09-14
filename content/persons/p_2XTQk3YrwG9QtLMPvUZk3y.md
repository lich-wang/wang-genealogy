---
schema: wang-person/v1
id: p_2XTQk3YrwG9QtLMPvUZk3y
status: active
merged_into: null
display_name: 王仁
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ng4xmVdSsPkbReKZpr47Qi
        subject_person_id: p_2XTQk3YrwG9QtLMPvUZk3y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QY1HYQ3tK6GT6jKGD7m4oM
          claim_id: c_Ng4xmVdSsPkbReKZpr47Qi
          source_id: s_3Dqe9o1m9AQCcCoNjJfq82
          stance: supports
          locator: CBDB:275665
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（275665）
          source: &a1
            id: s_3Dqe9o1m9AQCcCoNjJfq82
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 275665）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275665&o=json
            external_identifier: CBDB:275665
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.929Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aPfocmiU27bYsTd91WFERC
        subject_person_id: p_2XTQk3YrwG9QtLMPvUZk3y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁，明人物。弘治十八年進士，籍贯即墨。（中国历代人物传记资料库 CBDB 275665）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_he696uvIDAHStBlz2ApQ1C
          claim_id: c_aPfocmiU27bYsTd91WFERC
          source_id: s_3Dqe9o1m9AQCcCoNjJfq82
          stance: supports
          locator: CBDB:275665
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__fD38m_FCfpPkxKXjht68F
        subject_person_id: p_ax45r2gqCk3bG46hzyK38p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2XTQk3YrwG9QtLMPvUZk3y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7rv2mXl8cUc6V2f2HYZjPd
          claim_id: c__fD38m_FCfpPkxKXjht68F
          source_id: s_ruXa_5S4cp-SOvWcYa3JP4
          stance: supports
          locator: CBDB：兄弟 王偉（201651）之父／母 王璣
          quotation: null
          interpretation_note: 由兄弟关系推断：王仁 与 王偉 为同胞（CBDB 记「弟」），王偉 之父／母即 王仁 之父／母。
          source:
            id: s_ruXa_5S4cp-SOvWcYa3JP4
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 275665）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275665&o=json
            external_identifier: CBDB:275665
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ax45r2gqCk3bG46hzyK38p
        status: active
        display_name: 王璣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_UWF3UePrfEFXTx6Pqf6KhQ
        subject_person_id: p_2XTQk3YrwG9QtLMPvUZk3y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_LvB1BmafWakeZPFiqa6trK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hnXQg9e5uOuCMAwB1AFhMG
          claim_id: c_UWF3UePrfEFXTx6Pqf6KhQ
          source_id: s_ruXa_5S4cp-SOvWcYa3JP4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201651 王偉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ruXa_5S4cp-SOvWcYa3JP4
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 275665）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275665&o=json
            external_identifier: CBDB:275665
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LvB1BmafWakeZPFiqa6trK
        status: active
        display_name: 王偉
        merged_into_person_id: null
---

# 王仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁 | accepted |
| bio.summary | 王仁，明人物。弘治十八年進士，籍贯即墨。（中国历代人物传记资料库 CBDB 275665） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ax45r2gqCk3bG46hzyK38p | 王璣 | accepted |
| other | p_LvB1BmafWakeZPFiqa6trK | 王偉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仁（CBDB 275665）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275665&o=json)
