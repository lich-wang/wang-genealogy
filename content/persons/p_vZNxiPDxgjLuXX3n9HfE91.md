---
schema: wang-person/v1
id: p_vZNxiPDxgjLuXX3n9HfE91
status: active
merged_into: null
display_name: 王祿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7fLpwviHh9S1y7FVqwL6NT
        subject_person_id: p_vZNxiPDxgjLuXX3n9HfE91
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PcCUwLXsNVSci7VSMFj6g4
          claim_id: c_7fLpwviHh9S1y7FVqwL6NT
          source_id: s_6c4vEM77ZyfmuYL6J4jzQg
          stance: supports
          locator: CBDB:313041
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313041）
          source: &a1
            id: s_6c4vEM77ZyfmuYL6J4jzQg
            source_type: api_record
            title: 中国历代人物传记资料库：王祿（CBDB 313041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313041&o=json
            external_identifier: CBDB:313041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.894Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yEekBhKdQYvsrhJraAeogH
        subject_person_id: p_vZNxiPDxgjLuXX3n9HfE91
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祿，明人物。嘉靖二十九年進士，籍贯聊城，曾任嘉議大夫、運使。（中国历代人物传记资料库 CBDB 313041）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_35W0EuVSSeRCoXM-ur87F9
          claim_id: c_yEekBhKdQYvsrhJraAeogH
          source_id: s_6c4vEM77ZyfmuYL6J4jzQg
          stance: supports
          locator: CBDB:313041
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_2cnXpx5H-n3g8WWM-TK3Jb
        subject_person_id: p_vZNxiPDxgjLuXX3n9HfE91
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JKkS2K07VsQE7F_Vk2DiC0
          claim_id: c_2cnXpx5H-n3g8WWM-TK3Jb
          source_id: s_QAN5QDh2Pfie4nG4gBfdF4
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QAN5QDh2Pfie4nG4gBfdF4
            source_type: api_record
            title: 中国历代人物传记资料库：王應璧（CBDB 203997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203997&o=json
            external_identifier: CBDB:203997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.811Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
        status: active
        display_name: 王應璧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王祿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祿 | accepted |
| bio.summary | 王祿，明人物。嘉靖二十九年進士，籍贯聊城，曾任嘉議大夫、運使。（中国历代人物传记资料库 CBDB 313041） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1ZWbH3Q2UJJJLSJ9mDZ9cG | 王應璧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祿（CBDB 313041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313041&o=json)
- [中国历代人物传记资料库：王應璧（CBDB 203997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203997&o=json)
