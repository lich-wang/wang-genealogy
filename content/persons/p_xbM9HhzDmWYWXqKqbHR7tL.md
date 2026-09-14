---
schema: wang-person/v1
id: p_xbM9HhzDmWYWXqKqbHR7tL
status: active
merged_into: null
display_name: 王鼎
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dtH8u1uhx6QvFuwPyLcKrz
        subject_person_id: p_xbM9HhzDmWYWXqKqbHR7tL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XyeKoRPH8gAk3icijVqL59
          claim_id: c_dtH8u1uhx6QvFuwPyLcKrz
          source_id: s_a9odrGc15dLEnVSkfJxM51
          stance: supports
          locator: CBDB:67762
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67762）
          source: &a1
            id: s_a9odrGc15dLEnVSkfJxM51
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 67762）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67762&o=json
            external_identifier: CBDB:67762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.013Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8LRDBuqveN1eReTCsrUmLY
        subject_person_id: p_xbM9HhzDmWYWXqKqbHR7tL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1517年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DQJCgh3K4Es1wy4ApPKtyP
          claim_id: c_8LRDBuqveN1eReTCsrUmLY
          source_id: s_a9odrGc15dLEnVSkfJxM51
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5yVK2atwaeonQaGCsNi9sQ
        subject_person_id: p_xbM9HhzDmWYWXqKqbHR7tL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎（卒于1517年），明人物。明清進士進士，籍贯福州中衛，入仕進士，曾任大理寺右少卿、大理寺左寺丞、道監察御史。（中国历代人物传记资料库 CBDB 67762）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Pe8fSHhUEEoQ51lf_9kREr
          claim_id: c_5yVK2atwaeonQaGCsNi9sQ
          source_id: s_a9odrGc15dLEnVSkfJxM51
          stance: supports
          locator: CBDB:67762
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5hP1tsmOV0yrUyO76J4r4d
        subject_person_id: p_nyqs9ApnwkQcyXyVvZypWX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xbM9HhzDmWYWXqKqbHR7tL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CCiMJluoY5neonDdpHvs14
          claim_id: c_5hP1tsmOV0yrUyO76J4r4d
          source_id: s_yj1GmQFf8eL7oKHtqhB2fa
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第四十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yj1GmQFf8eL7oKHtqhB2fa
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 256056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256056&o=json
            external_identifier: CBDB:256056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.379Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nyqs9ApnwkQcyXyVvZypWX
        status: active
        display_name: 王佐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_3m5sVbmANCQHY4V-5_ZG5J
        subject_person_id: p_5pKUMRk5Sj8Xpro93UAChf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xbM9HhzDmWYWXqKqbHR7tL
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sIJEUOL6VDK7gjH84YW4qm
          claim_id: c_3m5sVbmANCQHY4V-5_ZG5J
          source_id: s_jPr1NbSjLiX5gg5fqfEWT2
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第四十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jPr1NbSjLiX5gg5fqfEWT2
            source_type: api_record
            title: 中国历代人物传记资料库：王智（CBDB 256055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256055&o=json
            external_identifier: CBDB:256055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.378Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5pKUMRk5Sj8Xpro93UAChf
        status: active
        display_name: 王智
        merged_into_person_id: null
    - claim:
        id: c_IJhNNdOdDaW3Kbh-R1JRCs
        subject_person_id: p_AtQAeRfDFnZkhe6UwZrjme
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xbM9HhzDmWYWXqKqbHR7tL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rfrJReFGRYTCsYA5lmKNb5
          claim_id: c_IJhNNdOdDaW3Kbh-R1JRCs
          source_id: s_PXyCQEQw1Gs9KoAoNj8GFQ
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第四十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PXyCQEQw1Gs9KoAoNj8GFQ
            source_type: api_record
            title: 中国历代人物传记资料库：王良（CBDB 256054）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256054&o=json
            external_identifier: CBDB:256054
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.377Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AtQAeRfDFnZkhe6UwZrjme
        status: active
        display_name: 王良
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_X5CG4JjoTRNbrhKYTGrVXB
        subject_person_id: p_FmDXfhm12BbFBkA7BFhH2E
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xbM9HhzDmWYWXqKqbHR7tL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h7e8j7T0AThSGyio62dHvr
          claim_id: c_X5CG4JjoTRNbrhKYTGrVXB
          source_id: s_XfD2yTnUxcholpNDVwEUxd
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67762 王鼎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XfD2yTnUxcholpNDVwEUxd
            source_type: api_record
            title: 中国历代人物传记资料库：王昪（CBDB 256061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256061&o=json
            external_identifier: CBDB:256061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FmDXfhm12BbFBkA7BFhH2E
        status: active
        display_name: 王昪
        merged_into_person_id: null
    - claim:
        id: c_pA4ab3mDk0wgeYGRGbC6Kc
        subject_person_id: p_ZHVSa562VcxoUfYaxj72dG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xbM9HhzDmWYWXqKqbHR7tL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fYIz2cT9mnR54uilS4NBvn
          claim_id: c_pA4ab3mDk0wgeYGRGbC6Kc
          source_id: s_Lydm-GPTvAH0EVpVulZIUq
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67762 王鼎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Lydm-GPTvAH0EVpVulZIUq
            source_type: api_record
            title: 中国历代人物传记资料库：王鼐（CBDB 256060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256060&o=json
            external_identifier: CBDB:256060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZHVSa562VcxoUfYaxj72dG
        status: active
        display_name: 王鼐
        merged_into_person_id: null
---

# 王鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎 | accepted |
| death.date | 1517年 | accepted |
| bio.summary | 王鼎（卒于1517年），明人物。明清進士進士，籍贯福州中衛，入仕進士，曾任大理寺右少卿、大理寺左寺丞、道監察御史。（中国历代人物传记资料库 CBDB 67762） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nyqs9ApnwkQcyXyVvZypWX | 王佐 | accepted |
| ancestors | p_5pKUMRk5Sj8Xpro93UAChf | 王智 | accepted |
| ancestors | p_AtQAeRfDFnZkhe6UwZrjme | 王良 | accepted |
| other | p_FmDXfhm12BbFBkA7BFhH2E | 王昪 | accepted |
| other | p_ZHVSa562VcxoUfYaxj72dG | 王鼐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昪（CBDB 256061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256061&o=json)
- [中国历代人物传记资料库：王鼎（CBDB 67762）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67762&o=json)
- [中国历代人物传记资料库：王良（CBDB 256054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256054&o=json)
- [中国历代人物传记资料库：王鼐（CBDB 256060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256060&o=json)
- [中国历代人物传记资料库：王智（CBDB 256055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256055&o=json)
- [中国历代人物传记资料库：王佐（CBDB 256056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256056&o=json)
