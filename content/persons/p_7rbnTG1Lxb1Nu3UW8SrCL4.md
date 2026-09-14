---
schema: wang-person/v1
id: p_7rbnTG1Lxb1Nu3UW8SrCL4
status: active
merged_into: null
display_name: 王堯甸
cbdb_id: 222823
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sJ59NhF6pT23eLNHYShjve
        subject_person_id: p_7rbnTG1Lxb1Nu3UW8SrCL4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯甸，明人物。萬曆十一年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 222823）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_mSkDBEgfItTEeOCEIsHcNC
          claim_id: c_sJ59NhF6pT23eLNHYShjve
          source_id: s_YWGHnYgqu7SBNDDNFjn9TY
          stance: supports
          locator: CBDB:222823
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_YWGHnYgqu7SBNDDNFjn9TY
            source_type: api_record
            title: 中国历代人物传记资料库：王堯甸（CBDB 222823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222823&o=json
            external_identifier: CBDB:222823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_y5yHSqpHrSUrboo9URBbrY
        subject_person_id: p_7rbnTG1Lxb1Nu3UW8SrCL4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯甸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jrYeRx8fyB4C3BsAb17Uyh
          claim_id: c_y5yHSqpHrSUrboo9URBbrY
          source_id: s_YWGHnYgqu7SBNDDNFjn9TY
          stance: supports
          locator: CBDB:222823
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ftHGoigUgcC013OyBU8MgF
        subject_person_id: p_oruQD3pLHzNQ8AvU3GVazK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7rbnTG1Lxb1Nu3UW8SrCL4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VQCNbHI7gpY8MhkF6oqiHQ
          claim_id: c_ftHGoigUgcC013OyBU8MgF
          source_id: s_YRCzwi7tbVx2viwNELoCw3
          stance: supports
          locator: CBDB：兄弟 王堯封（126717）之父／母 王維熊
          quotation: null
          interpretation_note: 由兄弟关系推断：王堯甸 与 王堯封 为同胞（CBDB 记「兄」），王堯封 之父／母即 王堯甸 之父／母。
          source:
            id: s_YRCzwi7tbVx2viwNELoCw3
            source_type: api_record
            title: 中国历代人物传记资料库：王堯甸（CBDB 222823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222823&o=json
            external_identifier: CBDB:222823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oruQD3pLHzNQ8AvU3GVazK
        status: active
        display_name: 王維熊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_R1OD_pdm-y-76htEOwYhWi
        subject_person_id: p_7rbnTG1Lxb1Nu3UW8SrCL4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DpuSp4mmLYMfmUMioXctjR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lQqeU0ToPTpax7dk685NPv
          claim_id: c_R1OD_pdm-y-76htEOwYhWi
          source_id: s_YRCzwi7tbVx2viwNELoCw3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126717 王堯封）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YRCzwi7tbVx2viwNELoCw3
            source_type: api_record
            title: 中国历代人物传记资料库：王堯甸（CBDB 222823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222823&o=json
            external_identifier: CBDB:222823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DpuSp4mmLYMfmUMioXctjR
        status: active
        display_name: 王堯封
        merged_into_person_id: null
---

# 王堯甸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王堯甸，明人物。萬曆十一年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 222823） | accepted |
| name.primary | 王堯甸 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oruQD3pLHzNQ8AvU3GVazK | 王維熊 | accepted |
| other | p_DpuSp4mmLYMfmUMioXctjR | 王堯封 | accepted |

## 外部来源

- [中国历代人物传记资料库：王堯甸（CBDB 222823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222823&o=json)
