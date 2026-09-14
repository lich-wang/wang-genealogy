---
schema: wang-person/v1
id: p_FaLwth23AGSDh2qKnKC6N9
status: active
merged_into: null
display_name: 王圜
cbdb_id: 228110
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F8YE1YoAv7HX3JgqsbwhXL
        subject_person_id: p_FaLwth23AGSDh2qKnKC6N9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王圜，明人物。萬曆丙戌科進士進士，籍贯耀州，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 228110）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_9W_B0ext6txBNLY-yGnAH3
          claim_id: c_F8YE1YoAv7HX3JgqsbwhXL
          source_id: s_nZikVHgq26idgEbfoUCtJH
          stance: supports
          locator: CBDB:228110
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_nZikVHgq26idgEbfoUCtJH
            source_type: api_record
            title: 中国历代人物传记资料库：王圜（CBDB 228110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228110&o=json
            external_identifier: CBDB:228110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BJPqvayq4aDs9x2LxvXGmc
        subject_person_id: p_FaLwth23AGSDh2qKnKC6N9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王圜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CbCA6DK81U6vWfFp7ubZeq
          claim_id: c_BJPqvayq4aDs9x2LxvXGmc
          source_id: s_nZikVHgq26idgEbfoUCtJH
          stance: supports
          locator: CBDB:228110
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NeGWAtW4RBOCc9mvHyNhe7
        subject_person_id: p_q3ewFUkH4tvUNYqQiNKdGz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FaLwth23AGSDh2qKnKC6N9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TGDcPfCZxBj7Oq_9CnFrbO
          claim_id: c_NeGWAtW4RBOCc9mvHyNhe7
          source_id: s_m3r1pcUaDriQibhXU0yOe8
          stance: supports
          locator: CBDB：兄弟 王圖（123710）之父／母 王邦憲
          quotation: null
          interpretation_note: 由兄弟关系推断：王圜 与 王圖 为同胞（CBDB 记「弟」），王圖 之父／母即 王圜 之父／母。
          source:
            id: s_m3r1pcUaDriQibhXU0yOe8
            source_type: api_record
            title: 中国历代人物传记资料库：王圜（CBDB 228110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228110&o=json
            external_identifier: CBDB:228110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_q3ewFUkH4tvUNYqQiNKdGz
        status: active
        display_name: 王邦憲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_e_xI6d7eSMVQ5lHTQTqYA1
        subject_person_id: p_FaLwth23AGSDh2qKnKC6N9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_h3Q7yK4WppDDdJLx2W9dJW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pe6A0b6ZmcuZRwBTjIWjtW
          claim_id: c_e_xI6d7eSMVQ5lHTQTqYA1
          source_id: s_m3r1pcUaDriQibhXU0yOe8
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 123710 王圖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_m3r1pcUaDriQibhXU0yOe8
            source_type: api_record
            title: 中国历代人物传记资料库：王圜（CBDB 228110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228110&o=json
            external_identifier: CBDB:228110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_h3Q7yK4WppDDdJLx2W9dJW
        status: active
        display_name: 王圖
        merged_into_person_id: null
---

# 王圜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王圜，明人物。萬曆丙戌科進士進士，籍贯耀州，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 228110） | accepted |
| name.primary | 王圜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_q3ewFUkH4tvUNYqQiNKdGz | 王邦憲 | accepted |
| other | p_h3Q7yK4WppDDdJLx2W9dJW | 王圖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王圜（CBDB 228110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228110&o=json)
