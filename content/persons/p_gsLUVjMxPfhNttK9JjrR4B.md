---
schema: wang-person/v1
id: p_gsLUVjMxPfhNttK9JjrR4B
status: active
merged_into: null
display_name: 王毓陽
cbdb_id: 126796
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V376tLDdG5wJ1YzFTNM9Po
        subject_person_id: p_gsLUVjMxPfhNttK9JjrR4B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毓陽，明人物。明清進士進士，籍贯綏德州，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 126796）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_FMRq1R91_of9GsAJkoGurN
          claim_id: c_V376tLDdG5wJ1YzFTNM9Po
          source_id: s_GrCwChP7fb8FzJ61FyJjPy
          stance: supports
          locator: CBDB:126796
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_GrCwChP7fb8FzJ61FyJjPy
            source_type: api_record
            title: 中国历代人物传记资料库：王毓陽（CBDB 126796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126796&o=json
            external_identifier: CBDB:126796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1YfSuxF7kUHbqK4nQJheAo
        subject_person_id: p_gsLUVjMxPfhNttK9JjrR4B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毓陽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TBRQRvycQ4J8Ug72kBgCcs
          claim_id: c_1YfSuxF7kUHbqK4nQJheAo
          source_id: s_GrCwChP7fb8FzJ61FyJjPy
          stance: supports
          locator: CBDB:126796
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fU4E8MTvxr68oksN97Kycw
        subject_person_id: p_4BZEjb4RmSoM8g2SGinzYD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gsLUVjMxPfhNttK9JjrR4B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8vA2lKRzXiQ-2YP4sdXlF0
          claim_id: c_fU4E8MTvxr68oksN97Kycw
          source_id: s_eH7acHbwwpxqevgiRumGbJ
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第九十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eH7acHbwwpxqevgiRumGbJ
            source_type: api_record
            title: 中国历代人物传记资料库：王訓賢（CBDB 214160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214160&o=json
            external_identifier: CBDB:214160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_4BZEjb4RmSoM8g2SGinzYD
        status: active
        display_name: 王訓賢
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_m9LoOkLnKEDE0qUfnXThUI
        subject_person_id: p_gnsgugu5diMHTTVdvydt1d
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gsLUVjMxPfhNttK9JjrR4B
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IetQDyE1b-XAVm8NUQivcd
          claim_id: c_m9LoOkLnKEDE0qUfnXThUI
          source_id: s_Y8DixhqFrB4zh7AEVqrCN2
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第九十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Y8DixhqFrB4zh7AEVqrCN2
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 214158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214158&o=json
            external_identifier: CBDB:214158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.145Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gnsgugu5diMHTTVdvydt1d
        status: active
        display_name: 王相
        merged_into_person_id: null
    - claim:
        id: c_9lRklJZOw_gjr0NfBKFcJX
        subject_person_id: p_2Z8fhEdQR8uQZfBp4A6Q7i
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gsLUVjMxPfhNttK9JjrR4B
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4CYwE98z8whdAz3pvTf7gA
          claim_id: c_9lRklJZOw_gjr0NfBKFcJX
          source_id: s_AiHZLH4SwW5rkDiaSFpVPt
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第九十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AiHZLH4SwW5rkDiaSFpVPt
            source_type: api_record
            title: 中国历代人物传记资料库：王智才（CBDB 214157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214157&o=json
            external_identifier: CBDB:214157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_2Z8fhEdQR8uQZfBp4A6Q7i
        status: active
        display_name: 王智才
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_0mOiktUjO_ejYuso2ZRwel
        subject_person_id: p_CLbsjyXZyJ1cmF54gMKDpM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gsLUVjMxPfhNttK9JjrR4B
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gvzzrij8yt3huuSclKFJTa
          claim_id: c_0mOiktUjO_ejYuso2ZRwel
          source_id: s_g9zIXTE85vCnqQlTdaG4VW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126796 王毓陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_g9zIXTE85vCnqQlTdaG4VW
            source_type: api_record
            title: 中国历代人物传记资料库：王矧陽（CBDB 214165）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214165&o=json
            external_identifier: CBDB:214165
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CLbsjyXZyJ1cmF54gMKDpM
        status: active
        display_name: 王矧陽
        merged_into_person_id: null
    - claim:
        id: c_RX4fym4qUeJu8WpasTW4Fv
        subject_person_id: p_MBF56sJKqhemwKwKyfgXLw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gsLUVjMxPfhNttK9JjrR4B
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DrqTs0WeL8xzcvY_S3D0P7
          claim_id: c_RX4fym4qUeJu8WpasTW4Fv
          source_id: s_xzgBqddvEWUcYQFlWYExFQ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126796 王毓陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xzgBqddvEWUcYQFlWYExFQ
            source_type: api_record
            title: 中国历代人物传记资料库：王脁陽（CBDB 214164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214164&o=json
            external_identifier: CBDB:214164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MBF56sJKqhemwKwKyfgXLw
        status: active
        display_name: 王脁陽
        merged_into_person_id: null
---

# 王毓陽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王毓陽，明人物。明清進士進士，籍贯綏德州，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 126796） | accepted |
| name.primary | 王毓陽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4BZEjb4RmSoM8g2SGinzYD | 王訓賢 | accepted |
| ancestors | p_gnsgugu5diMHTTVdvydt1d | 王相 | accepted |
| ancestors | p_2Z8fhEdQR8uQZfBp4A6Q7i | 王智才 | accepted |
| other | p_CLbsjyXZyJ1cmF54gMKDpM | 王矧陽 | accepted |
| other | p_MBF56sJKqhemwKwKyfgXLw | 王脁陽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王矧陽（CBDB 214165）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214165&o=json)
- [中国历代人物传记资料库：王脁陽（CBDB 214164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214164&o=json)
- [中国历代人物传记资料库：王相（CBDB 214158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214158&o=json)
- [中国历代人物传记资料库：王訓賢（CBDB 214160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214160&o=json)
- [中国历代人物传记资料库：王毓陽（CBDB 126796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126796&o=json)
- [中国历代人物传记资料库：王智才（CBDB 214157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214157&o=json)
