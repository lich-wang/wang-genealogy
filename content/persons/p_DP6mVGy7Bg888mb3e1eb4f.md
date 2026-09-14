---
schema: wang-person/v1
id: p_DP6mVGy7Bg888mb3e1eb4f
status: active
merged_into: null
display_name: 王炌
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XUxTB6uQ2hQ9d6i3mJMQM6
        subject_person_id: p_DP6mVGy7Bg888mb3e1eb4f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dB18W9w6Lf2FAb8JSKx6kZ
          claim_id: c_XUxTB6uQ2hQ9d6i3mJMQM6
          source_id: s_8ptfF5nUva114s6ZS71kv7
          stance: supports
          locator: CBDB:219260
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（219260）
          source: &a1
            id: s_8ptfF5nUva114s6ZS71kv7
            source_type: api_record
            title: 中国历代人物传记资料库：王炌（CBDB 219260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219260&o=json
            external_identifier: CBDB:219260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.279Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9NFRJo9nu75MFCKJHjihQp
        subject_person_id: p_DP6mVGy7Bg888mb3e1eb4f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炌，明人物。萬曆八年進士，籍贯代州，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 219260）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bJx4bbCcZlv3e9gp5_wIpe
          claim_id: c_9NFRJo9nu75MFCKJHjihQp
          source_id: s_8ptfF5nUva114s6ZS71kv7
          stance: supports
          locator: CBDB:219260
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_p37hiduarAkHvgd7SVyD2J
        subject_person_id: p_dQG6P5Z5ucUGLgZuSEfakq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DP6mVGy7Bg888mb3e1eb4f
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0TrISyC0bR8QLyUBmBV5ok
          claim_id: c_p37hiduarAkHvgd7SVyD2J
          source_id: s_KnFhkch2xUEoZNspO2P82k
          stance: supports
          locator: CBDB：兄弟 王乾亨（206520）之父／母 王熙政
          quotation: null
          interpretation_note: 由兄弟关系推断：王炌 与 王乾亨 为同胞（CBDB 记「弟」），王乾亨 之父／母即 王炌 之父／母。
          source:
            id: s_KnFhkch2xUEoZNspO2P82k
            source_type: api_record
            title: 中国历代人物传记资料库：王炌（CBDB 219260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219260&o=json
            external_identifier: CBDB:219260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dQG6P5Z5ucUGLgZuSEfakq
        status: active
        display_name: 王熙政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_WBDwU-UBkp7bGtRzd6AgcC
        subject_person_id: p_DP6mVGy7Bg888mb3e1eb4f
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mhrvputkBEQ43wY64CJw5k
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cqeQO49T1ygCg_M0eJH3og
          claim_id: c_WBDwU-UBkp7bGtRzd6AgcC
          source_id: s_KnFhkch2xUEoZNspO2P82k
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206520 王乾亨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KnFhkch2xUEoZNspO2P82k
            source_type: api_record
            title: 中国历代人物传记资料库：王炌（CBDB 219260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219260&o=json
            external_identifier: CBDB:219260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mhrvputkBEQ43wY64CJw5k
        status: active
        display_name: 王乾亨
        merged_into_person_id: null
---

# 王炌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炌 | accepted |
| bio.summary | 王炌，明人物。萬曆八年進士，籍贯代州，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 219260） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dQG6P5Z5ucUGLgZuSEfakq | 王熙政 | accepted |
| other | p_mhrvputkBEQ43wY64CJw5k | 王乾亨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王炌（CBDB 219260）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219260&o=json)
