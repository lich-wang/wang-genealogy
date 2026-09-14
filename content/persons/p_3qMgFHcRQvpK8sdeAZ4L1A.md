---
schema: wang-person/v1
id: p_3qMgFHcRQvpK8sdeAZ4L1A
status: active
merged_into: null
display_name: 王同廉
cbdb_id: 228279
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UP8VaDnU9z5CEt6HDFmmJg
        subject_person_id: p_3qMgFHcRQvpK8sdeAZ4L1A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同廉，明人物。萬曆丙戌科進士進士，籍贯晉江，入仕監生。（中国历代人物传记资料库 CBDB 228279）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_F-LFE4ysa2t_MdFw2qvlOK
          claim_id: c_UP8VaDnU9z5CEt6HDFmmJg
          source_id: s_gfigZjHMbqs4tGBvP4dibD
          stance: supports
          locator: CBDB:228279
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_gfigZjHMbqs4tGBvP4dibD
            source_type: api_record
            title: 中国历代人物传记资料库：王同廉（CBDB 228279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228279&o=json
            external_identifier: CBDB:228279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_623ov5XoJB3LXJMGsPosZf
        subject_person_id: p_3qMgFHcRQvpK8sdeAZ4L1A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同廉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Gd251GTXxpbqpQ8Bkg756g
          claim_id: c_623ov5XoJB3LXJMGsPosZf
          source_id: s_gfigZjHMbqs4tGBvP4dibD
          stance: supports
          locator: CBDB:228279
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_t-uDgSlc7ZjG0IDszojrP7
        subject_person_id: p_kNvoZFnJm2KQZhvhLXYs7R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3qMgFHcRQvpK8sdeAZ4L1A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PRmP3Ms3_4oDLsng750YgU
          claim_id: c_t-uDgSlc7ZjG0IDszojrP7
          source_id: s_DFPD1d5mCY3Qh-3s2BhiAw
          stance: supports
          locator: CBDB：兄弟 王同休（207136）之父／母 王惟中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同廉 与 王同休 为同胞（CBDB 记「弟」），王同休 之父／母即 王同廉 之父／母。
          source:
            id: s_DFPD1d5mCY3Qh-3s2BhiAw
            source_type: api_record
            title: 中国历代人物传记资料库：王同廉（CBDB 228279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228279&o=json
            external_identifier: CBDB:228279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kNvoZFnJm2KQZhvhLXYs7R
        status: active
        display_name: 王惟中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_T4c1-f5dYIAOY1ZEfVIM79
        subject_person_id: p_3qMgFHcRQvpK8sdeAZ4L1A
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0fVpIjcq7YOHT4nRufD27N
          claim_id: c_T4c1-f5dYIAOY1ZEfVIM79
          source_id: s_DFPD1d5mCY3Qh-3s2BhiAw
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207136 王同休）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DFPD1d5mCY3Qh-3s2BhiAw
            source_type: api_record
            title: 中国历代人物传记资料库：王同廉（CBDB 228279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228279&o=json
            external_identifier: CBDB:228279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MWFGy9uHg9NsSwK8c42QRv
        status: active
        display_name: 王同休
        merged_into_person_id: null
---

# 王同廉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王同廉，明人物。萬曆丙戌科進士進士，籍贯晉江，入仕監生。（中国历代人物传记资料库 CBDB 228279） | accepted |
| name.primary | 王同廉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kNvoZFnJm2KQZhvhLXYs7R | 王惟中 | accepted |
| other | p_MWFGy9uHg9NsSwK8c42QRv | 王同休 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同廉（CBDB 228279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228279&o=json)
