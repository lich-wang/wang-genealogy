---
schema: wang-person/v1
id: p_pRE8tgS2kdZDvfTt1GWCyR
status: active
merged_into: null
display_name: 王慶環
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HWbQJLY2Uv9PoxBmqHAoFq
        subject_person_id: p_pRE8tgS2kdZDvfTt1GWCyR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶環
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gaeVsepffKtUfWJk9Ec4rq
          claim_id: c_HWbQJLY2Uv9PoxBmqHAoFq
          source_id: s_axSsWvHTTDCp8fkC4piz5k
          stance: supports
          locator: CBDB:316799
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（316799）
          source: &a1
            id: s_axSsWvHTTDCp8fkC4piz5k
            source_type: api_record
            title: 中国历代人物传记资料库：王慶環（CBDB 316799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316799&o=json
            external_identifier: CBDB:316799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.964Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oXWezCf5iLo14cns8NR6Cv
        subject_person_id: p_pRE8tgS2kdZDvfTt1GWCyR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶環，明人物。嘉靖三十二年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 316799）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-BGHoSPXMfAttYWi9YxQuw
          claim_id: c_oXWezCf5iLo14cns8NR6Cv
          source_id: s_axSsWvHTTDCp8fkC4piz5k
          stance: supports
          locator: CBDB:316799
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_SSXo7MLjMwSClmhGIjorFi
        subject_person_id: p_pRE8tgS2kdZDvfTt1GWCyR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5HHB1Hb4zKCj9LE68zB5ne
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xRFsuPzksa_cZGy922NGpr
          claim_id: c_SSXo7MLjMwSClmhGIjorFi
          source_id: s_mH73qQseyDbuSt264sdqpQ
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第七十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mH73qQseyDbuSt264sdqpQ
            source_type: api_record
            title: 中国历代人物传记资料库：王文炳（CBDB 126458）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126458&o=json
            external_identifier: CBDB:126458
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.971Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5HHB1Hb4zKCj9LE68zB5ne
        status: active
        display_name: 王文炳
        merged_into_person_id: null
    - claim:
        id: c_UyYQ5WfjJ0eCFioAGi36xO
        subject_person_id: p_pRE8tgS2kdZDvfTt1GWCyR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4y4hsyWFb4sdDAPsmZsNBQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xVPvHyTXaSbbBK16EuyYP3
          claim_id: c_UyYQ5WfjJ0eCFioAGi36xO
          source_id: s_ku3mU0Nlzdrt0e3BoFfdI0
          stance: supports
          locator: CBDB：兄弟 王文炳（126458）之父／母 王慶環
          quotation: null
          interpretation_note: 由兄弟关系推断：王文燈 与 王文炳 为同胞（CBDB 记「兄」），王文炳 之父／母即 王文燈 之父／母。
          source:
            id: s_ku3mU0Nlzdrt0e3BoFfdI0
            source_type: api_record
            title: 中国历代人物传记资料库：王文燈（CBDB 316805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316805&o=json
            external_identifier: CBDB:316805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4y4hsyWFb4sdDAPsmZsNBQ
        status: active
        display_name: 王文燈
        merged_into_person_id: null
    - claim:
        id: c_KGBgP3bb-R-Mh-D2ynKsrH
        subject_person_id: p_pRE8tgS2kdZDvfTt1GWCyR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9Mxu2joESQeGJeXNQk3MVP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__4hKkfRqjiJvix8OpyBNr4
          claim_id: c_KGBgP3bb-R-Mh-D2ynKsrH
          source_id: s_r0fhVf2-pVfpRl2j_jzsjW
          stance: supports
          locator: CBDB：兄弟 王文炳（126458）之父／母 王慶環
          quotation: null
          interpretation_note: 由兄弟关系推断：王文炤 与 王文炳 为同胞（CBDB 记「兄」），王文炳 之父／母即 王文炤 之父／母。
          source:
            id: s_r0fhVf2-pVfpRl2j_jzsjW
            source_type: api_record
            title: 中国历代人物传记资料库：王文炤（CBDB 316804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316804&o=json
            external_identifier: CBDB:316804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9Mxu2joESQeGJeXNQk3MVP
        status: active
        display_name: 王文炤
        merged_into_person_id: null
    - claim:
        id: c_LcM60WO5TSYav5UdCZVtrP
        subject_person_id: p_pRE8tgS2kdZDvfTt1GWCyR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Dx7DJAFgKcf2Mjx7rmznYb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZjykrMZqYTQ2-9NAMeYLHb
          claim_id: c_LcM60WO5TSYav5UdCZVtrP
          source_id: s_seTzuXIsfjNqlkgugCB4hq
          stance: supports
          locator: CBDB：兄弟 王文炳（126458）之父／母 王慶環
          quotation: null
          interpretation_note: 由兄弟关系推断：王文煒 与 王文炳 为同胞（CBDB 记「兄」），王文炳 之父／母即 王文煒 之父／母。
          source:
            id: s_seTzuXIsfjNqlkgugCB4hq
            source_type: api_record
            title: 中国历代人物传记资料库：王文煒（CBDB 316803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316803&o=json
            external_identifier: CBDB:316803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Dx7DJAFgKcf2Mjx7rmznYb
        status: active
        display_name: 王文煒
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王慶環

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶環 | accepted |
| bio.summary | 王慶環，明人物。嘉靖三十二年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 316799） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5HHB1Hb4zKCj9LE68zB5ne | 王文炳 | accepted |
| children | p_4y4hsyWFb4sdDAPsmZsNBQ | 王文燈 | accepted |
| children | p_9Mxu2joESQeGJeXNQk3MVP | 王文炤 | accepted |
| children | p_Dx7DJAFgKcf2Mjx7rmznYb | 王文煒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慶環（CBDB 316799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316799&o=json)
- [中国历代人物传记资料库：王文炳（CBDB 126458）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126458&o=json)
- [中国历代人物传记资料库：王文燈（CBDB 316805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316805&o=json)
- [中国历代人物传记资料库：王文煒（CBDB 316803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316803&o=json)
- [中国历代人物传记资料库：王文炤（CBDB 316804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316804&o=json)
