---
schema: wang-person/v1
id: p_sLhnC92rQu1PepE5sPJ3EL
status: active
merged_into: null
display_name: 王弘道
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CEKvMZnG8MiPWyZhHDv9VC
        subject_person_id: p_sLhnC92rQu1PepE5sPJ3EL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vKBdwudmZfX5rCr28AGjxK
          claim_id: c_CEKvMZnG8MiPWyZhHDv9VC
          source_id: s_nPNqgjLXFKXupwCtLn7fuJ
          stance: supports
          locator: CBDB:202780
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202780）
          source: &a1
            id: s_nPNqgjLXFKXupwCtLn7fuJ
            source_type: api_record
            title: 中国历代人物传记资料库：王弘道（CBDB 202780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202780&o=json
            external_identifier: CBDB:202780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.754Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_y2QF19fanzwX6eiJnw6rSs
        subject_person_id: p_sLhnC92rQu1PepE5sPJ3EL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1498年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7KPKRLVgf7dY7RQgupXzcF
          claim_id: c_y2QF19fanzwX6eiJnw6rSs
          source_id: s_nPNqgjLXFKXupwCtLn7fuJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3FJ2xZdL6kZNtHdC5An9My
        subject_person_id: p_sLhnC92rQu1PepE5sPJ3EL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘道（生于1498年），明人物。明清進士進士，籍贯霑化，入仕進士，曾任御史、刑部觀政。（中国历代人物传记资料库 CBDB 202780）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4MYZw9Qy5ghgJh-KXCDQPS
          claim_id: c_3FJ2xZdL6kZNtHdC5An9My
          source_id: s_nPNqgjLXFKXupwCtLn7fuJ
          stance: supports
          locator: CBDB:202780
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EM6nwwwjWpmJvds0bTm6e5
        subject_person_id: p_aSjUnGimC5SWPWNHQXYgEV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sLhnC92rQu1PepE5sPJ3EL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sSZ9RILKwE1_5estX5vjsv
          claim_id: c_EM6nwwwjWpmJvds0bTm6e5
          source_id: s_pBCoy9qibCkZtqmHdy5v3e
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百八十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pBCoy9qibCkZtqmHdy5v3e
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 294203）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294203&o=json
            external_identifier: CBDB:294203
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.439Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aSjUnGimC5SWPWNHQXYgEV
        status: active
        display_name: 王慶
        merged_into_person_id: null
  children:
    - claim:
        id: c_0SCTzof0WNqM-7I8KBpdx2
        subject_person_id: p_sLhnC92rQu1PepE5sPJ3EL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_M5d8AEzKGzeLAvXY3qgVs9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8r9K_jz9MsreNnmHqKjEUJ
          claim_id: c_0SCTzof0WNqM-7I8KBpdx2
          source_id: s_yMSbfyFjgDXSZFC7zRJNB2
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百八十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yMSbfyFjgDXSZFC7zRJNB2
            source_type: api_record
            title: 中国历代人物传记资料库：王浚（CBDB 294210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294210&o=json
            external_identifier: CBDB:294210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.440Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_M5d8AEzKGzeLAvXY3qgVs9
        status: active
        display_name: 王浚
        merged_into_person_id: null
    - claim:
        id: c_Y9hvJIZM9MEJ8fZahKfZIX
        subject_person_id: p_sLhnC92rQu1PepE5sPJ3EL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sofKLPWRpVmv9BQf2K7RKn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n8rrR4eGzmT2gnTSavj7Wb
          claim_id: c_Y9hvJIZM9MEJ8fZahKfZIX
          source_id: s_mZ25Dv9w7fuXpvhPMKXPnD
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百八十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mZ25Dv9w7fuXpvhPMKXPnD
            source_type: api_record
            title: 中国历代人物传记资料库：王汲（CBDB 294209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294209&o=json
            external_identifier: CBDB:294209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.440Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_sofKLPWRpVmv9BQf2K7RKn
        status: active
        display_name: 王汲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_5smMmPs1Ea-R-wXnCFSuah
        subject_person_id: p_aTW1MsjqPLs9BnURby1HZP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sLhnC92rQu1PepE5sPJ3EL
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uxl_GnwglD5u1rXTb_K22z
          claim_id: c_5smMmPs1Ea-R-wXnCFSuah
          source_id: s_fvEtJXtrin1wo285ZLPF6r
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百八十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fvEtJXtrin1wo285ZLPF6r
            source_type: api_record
            title: 中国历代人物传记资料库：王奉（CBDB 294202）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294202&o=json
            external_identifier: CBDB:294202
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.439Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aTW1MsjqPLs9BnURby1HZP
        status: active
        display_name: 王奉
        merged_into_person_id: null
    - claim:
        id: c_7pC1tHabqxBs--WJEWwXGn
        subject_person_id: p_c4dQAmoU591Gmsc9M6ooR4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sLhnC92rQu1PepE5sPJ3EL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qSAOzm5rboWqeUrvTmc6ry
          claim_id: c_7pC1tHabqxBs--WJEWwXGn
          source_id: s_vmA9Jvhzhdpu24BAF5bTaz
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百八十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vmA9Jvhzhdpu24BAF5bTaz
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 294201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294201&o=json
            external_identifier: CBDB:294201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.438Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_c4dQAmoU591Gmsc9M6ooR4
        status: active
        display_name: 王昇
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王弘道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弘道 | accepted |
| birth.date | 1498年 | accepted |
| bio.summary | 王弘道（生于1498年），明人物。明清進士進士，籍贯霑化，入仕進士，曾任御史、刑部觀政。（中国历代人物传记资料库 CBDB 202780） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aSjUnGimC5SWPWNHQXYgEV | 王慶 | accepted |
| children | p_M5d8AEzKGzeLAvXY3qgVs9 | 王浚 | accepted |
| children | p_sofKLPWRpVmv9BQf2K7RKn | 王汲 | accepted |
| ancestors | p_aTW1MsjqPLs9BnURby1HZP | 王奉 | accepted |
| ancestors | p_c4dQAmoU591Gmsc9M6ooR4 | 王昇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王奉（CBDB 294202）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294202&o=json)
- [中国历代人物传记资料库：王弘道（CBDB 202780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202780&o=json)
- [中国历代人物传记资料库：王汲（CBDB 294209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294209&o=json)
- [中国历代人物传记资料库：王浚（CBDB 294210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294210&o=json)
- [中国历代人物传记资料库：王慶（CBDB 294203）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294203&o=json)
- [中国历代人物传记资料库：王昇（CBDB 294201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294201&o=json)
