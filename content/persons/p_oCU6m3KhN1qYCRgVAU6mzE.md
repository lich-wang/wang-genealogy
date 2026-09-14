---
schema: wang-person/v1
id: p_oCU6m3KhN1qYCRgVAU6mzE
status: active
merged_into: null
display_name: 王嘉賓
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aT9rX1wmcGv5r979H8Vej9
        subject_person_id: p_oCU6m3KhN1qYCRgVAU6mzE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V8XCp1NbouyJm2Fwb886q8
          claim_id: c_aT9rX1wmcGv5r979H8Vej9
          source_id: s_WcpNwEX8R4iV3th7rDwqrS
          stance: supports
          locator: CBDB:126781
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126781）
          source: &a1
            id: s_WcpNwEX8R4iV3th7rDwqrS
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉賓（CBDB 126781）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126781&o=json
            external_identifier: CBDB:126781
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.200Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M5EC4FCAzfM3pZVaB3iib6
        subject_person_id: p_oCU6m3KhN1qYCRgVAU6mzE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉賓，明人物。明清進士進士，籍贯滕縣，入仕進士，曾任知縣、知府。（中国历代人物传记资料库 CBDB 126781）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J65lYamYa7EpliUJMTHVgE
          claim_id: c_M5EC4FCAzfM3pZVaB3iib6
          source_id: s_WcpNwEX8R4iV3th7rDwqrS
          stance: supports
          locator: CBDB:126781
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NBa7jbAG96nTYAG017O_-x
        subject_person_id: p_ti6Fg8MT1rHxww4P7Fhfft
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oCU6m3KhN1qYCRgVAU6mzE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qv1h8HKtj7AjgmCEWZ3A-3
          claim_id: c_NBa7jbAG96nTYAG017O_-x
          source_id: s_2KZkRk6rJcccWy1v6z7dBg
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百八十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2KZkRk6rJcccWy1v6z7dBg
            source_type: api_record
            title: 中国历代人物传记资料库：王天敘（CBDB 329103）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329103&o=json
            external_identifier: CBDB:329103
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.317Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ti6Fg8MT1rHxww4P7Fhfft
        status: active
        display_name: 王天敘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_9io_i65ZiZNolTkBpzxyds
        subject_person_id: p_8rr68g8cnLvivKeGYTCMFh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oCU6m3KhN1qYCRgVAU6mzE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yk5WRBrMWu_UvDxmANhznx
          claim_id: c_9io_i65ZiZNolTkBpzxyds
          source_id: s_77A4dW2ey4uhVsp6WzwGG7
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百八十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_77A4dW2ey4uhVsp6WzwGG7
            source_type: api_record
            title: 中国历代人物传记资料库：王美（CBDB 329102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329102&o=json
            external_identifier: CBDB:329102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.316Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8rr68g8cnLvivKeGYTCMFh
        status: active
        display_name: 王美
        merged_into_person_id: null
    - claim:
        id: c_O7AlTheDylq8tQ4ktjwh0O
        subject_person_id: p_tNgkKtGqZPKoCHfNUfMVwp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oCU6m3KhN1qYCRgVAU6mzE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5ZuE85jmkWANLsh96nQBJf
          claim_id: c_O7AlTheDylq8tQ4ktjwh0O
          source_id: s_UWuXMh88C5S38FHFUFr43h
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百八十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UWuXMh88C5S38FHFUFr43h
            source_type: api_record
            title: 中国历代人物传记资料库：王峻（CBDB 329101）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329101&o=json
            external_identifier: CBDB:329101
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.316Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tNgkKtGqZPKoCHfNUfMVwp
        status: active
        display_name: 王峻
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_skyomxNB1GUlJc-PLsrlPc
        subject_person_id: p_YSsBJmFuNZkJBwTRdMV85G
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oCU6m3KhN1qYCRgVAU6mzE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fV5Ldzxen_G353WNpg2aNz
          claim_id: c_skyomxNB1GUlJc-PLsrlPc
          source_id: s_GHscoiRwIOfgT3jB0SLy4A
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126781 王嘉賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GHscoiRwIOfgT3jB0SLy4A
            source_type: api_record
            title: 中国历代人物传记资料库：王元賓（CBDB 329106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329106&o=json
            external_identifier: CBDB:329106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YSsBJmFuNZkJBwTRdMV85G
        status: active
        display_name: 王元賓
        merged_into_person_id: null
    - claim:
        id: c_kK7RMwzssLxmZh_T7vcf2x
        subject_person_id: p_miRWGgdwUfGS5JhZC9Zpup
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oCU6m3KhN1qYCRgVAU6mzE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_46F1AJhcOGeUTcShSM1cmN
          claim_id: c_kK7RMwzssLxmZh_T7vcf2x
          source_id: s_HetSdFzoln-en3TZCzUDyy
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126781 王嘉賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HetSdFzoln-en3TZCzUDyy
            source_type: api_record
            title: 中国历代人物传记资料库：王种賓（CBDB 329107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329107&o=json
            external_identifier: CBDB:329107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_miRWGgdwUfGS5JhZC9Zpup
        status: active
        display_name: 王种賓
        merged_into_person_id: null
---

# 王嘉賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉賓 | accepted |
| bio.summary | 王嘉賓，明人物。明清進士進士，籍贯滕縣，入仕進士，曾任知縣、知府。（中国历代人物传记资料库 CBDB 126781） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ti6Fg8MT1rHxww4P7Fhfft | 王天敘 | accepted |
| ancestors | p_8rr68g8cnLvivKeGYTCMFh | 王美 | accepted |
| ancestors | p_tNgkKtGqZPKoCHfNUfMVwp | 王峻 | accepted |
| other | p_YSsBJmFuNZkJBwTRdMV85G | 王元賓 | accepted |
| other | p_miRWGgdwUfGS5JhZC9Zpup | 王种賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉賓（CBDB 126781）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126781&o=json)
- [中国历代人物传记资料库：王峻（CBDB 329101）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329101&o=json)
- [中国历代人物传记资料库：王美（CBDB 329102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329102&o=json)
- [中国历代人物传记资料库：王天敘（CBDB 329103）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329103&o=json)
- [中国历代人物传记资料库：王元賓（CBDB 329106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329106&o=json)
- [中国历代人物传记资料库：王种賓（CBDB 329107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329107&o=json)
