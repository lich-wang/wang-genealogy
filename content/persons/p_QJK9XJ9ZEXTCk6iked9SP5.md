---
schema: wang-person/v1
id: p_QJK9XJ9ZEXTCk6iked9SP5
status: active
merged_into: null
display_name: 王鍭
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HDjoJc1FwNtBEVXP4aPsDy
        subject_person_id: p_QJK9XJ9ZEXTCk6iked9SP5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WYXZCTGKDKnU6MFUkicdiy
          claim_id: c_HDjoJc1FwNtBEVXP4aPsDy
          source_id: s_5SFGLByF5UAhkCQJ3ZU4Bv
          stance: supports
          locator: CBDB:314687
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314687）
          source: &a1
            id: s_5SFGLByF5UAhkCQJ3ZU4Bv
            source_type: api_record
            title: 中国历代人物传记资料库：王鍭（CBDB 314687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314687&o=json
            external_identifier: CBDB:314687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.938Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BAKWfJNwDUYBhZpRGL6KjF
        subject_person_id: p_QJK9XJ9ZEXTCk6iked9SP5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍭，明人物。嘉靖二十九年進士，籍贯東陽。（中国历代人物传记资料库 CBDB 314687）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_46W8lUU57v8aySD-08WWkO
          claim_id: c_BAKWfJNwDUYBhZpRGL6KjF
          source_id: s_5SFGLByF5UAhkCQJ3ZU4Bv
          stance: supports
          locator: CBDB:314687
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gSTh6GI1McS36OBs53dQTi
        subject_person_id: p_ajPx8SrP67WXjyut5BBExs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QJK9XJ9ZEXTCk6iked9SP5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zT-6uRSXKW-DTF0o2DXbAY
          claim_id: c_gSTh6GI1McS36OBs53dQTi
          source_id: s_10aTJDp4rHE-9ENifUuyLG
          stance: supports
          locator: CBDB：兄弟 王鈇（67912）之父／母 王睿
          quotation: null
          interpretation_note: 由兄弟关系推断：王鍭 与 王鈇 为同胞（CBDB 记「兄」），王鈇 之父／母即 王鍭 之父／母。
          source:
            id: s_10aTJDp4rHE-9ENifUuyLG
            source_type: api_record
            title: 中国历代人物传记资料库：王鍭（CBDB 314687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314687&o=json
            external_identifier: CBDB:314687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ajPx8SrP67WXjyut5BBExs
        status: active
        display_name: 王睿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_o5hLBInYrRhUMB8AQN80tw
        subject_person_id: p_KdnEK5JvxzCLuhzpo1b35X
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QJK9XJ9ZEXTCk6iked9SP5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1d533u8YOkWKUfViBSwBn2
          claim_id: c_o5hLBInYrRhUMB8AQN80tw
          source_id: s_10aTJDp4rHE-9ENifUuyLG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67912 王鈇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_10aTJDp4rHE-9ENifUuyLG
            source_type: api_record
            title: 中国历代人物传记资料库：王鍭（CBDB 314687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314687&o=json
            external_identifier: CBDB:314687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KdnEK5JvxzCLuhzpo1b35X
        status: active
        display_name: 王鈇
        merged_into_person_id: null
---

# 王鍭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍭 | accepted |
| bio.summary | 王鍭，明人物。嘉靖二十九年進士，籍贯東陽。（中国历代人物传记资料库 CBDB 314687） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ajPx8SrP67WXjyut5BBExs | 王睿 | accepted |
| other | p_KdnEK5JvxzCLuhzpo1b35X | 王鈇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鍭（CBDB 314687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314687&o=json)
