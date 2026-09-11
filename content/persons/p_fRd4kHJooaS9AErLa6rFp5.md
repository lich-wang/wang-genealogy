---
schema: wang-person/v1
id: p_fRd4kHJooaS9AErLa6rFp5
status: active
merged_into: null
display_name: 王瀠
cbdb_id: 207813
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CjCsAVXwHPTDMi7faw9AiE
        subject_person_id: p_fRd4kHJooaS9AErLa6rFp5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀠（生于1586年），明人物。中国历代人物传记资料库（CBDB）以人物编号 207813 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_ErKNBy3Et7dcMUrN8Wl9pT
          claim_id: c_CjCsAVXwHPTDMi7faw9AiE
          source_id: s_JWdns37FDW5n6mqEGZ9QZM
          stance: supports
          locator: CBDB:207813
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_JWdns37FDW5n6mqEGZ9QZM
            source_type: api_record
            title: 中国历代人物传记资料库：王瀠（CBDB 207813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207813&o=json
            external_identifier: CBDB:207813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_654aEnMDymwzfTCuuzMnNK
        subject_person_id: p_fRd4kHJooaS9AErLa6rFp5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1586年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1586-01-01
            latest: 1586-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2tpGnae32hwNAWyrG1Uu68
          claim_id: c_654aEnMDymwzfTCuuzMnNK
          source_id: s_JWdns37FDW5n6mqEGZ9QZM
          stance: supports
          locator: CBDB:207813
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1586
          source:
            id: s_JWdns37FDW5n6mqEGZ9QZM
            source_type: api_record
            title: 中国历代人物传记资料库：王瀠（CBDB 207813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207813&o=json
            external_identifier: CBDB:207813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LQLbwH1aBwGM1sgPBQDKcy
        subject_person_id: p_fRd4kHJooaS9AErLa6rFp5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_RskgkvhGCaRuosxbvUYFah
          claim_id: c_LQLbwH1aBwGM1sgPBQDKcy
          source_id: s_JWdns37FDW5n6mqEGZ9QZM
          stance: supports
          locator: CBDB:207813
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1586
          source:
            id: s_JWdns37FDW5n6mqEGZ9QZM
            source_type: api_record
            title: 中国历代人物传记资料库：王瀠（CBDB 207813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207813&o=json
            external_identifier: CBDB:207813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ixQe3NElEq_p_FJiFcG21P
        subject_person_id: p_45n56RiQTWtDC21tW3p7zG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fRd4kHJooaS9AErLa6rFp5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-0EgNnuWLGiOV5iunO0XaO
          claim_id: c_ixQe3NElEq_p_FJiFcG21P
          source_id: s_h1K8j2LgZhDFnpaWCH2NWh
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百五十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_h1K8j2LgZhDFnpaWCH2NWh
            source_type: api_record
            title: 中国历代人物传记资料库：王寶（CBDB 236418）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236418&o=json
            external_identifier: CBDB:236418
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.779Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_45n56RiQTWtDC21tW3p7zG
        status: active
        display_name: 王寶
        merged_into_person_id: null
    - claim:
        id: c_4pRzmEMY6n7BdS3JR_3YR3
        subject_person_id: p_8EVZxxAjXpWHbww1dEyK7t
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fRd4kHJooaS9AErLa6rFp5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iIYiTLwNScA0pxgPkPV0wB
          claim_id: c_4pRzmEMY6n7BdS3JR_3YR3
          source_id: s_ZFJTmG9pUDoC1cKoGx1HQW
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百五十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZFJTmG9pUDoC1cKoGx1HQW
            source_type: api_record
            title: 中国历代人物传记资料库：王希哲（CBDB 236419）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236419&o=json
            external_identifier: CBDB:236419
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.780Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8EVZxxAjXpWHbww1dEyK7t
        status: active
        display_name: 王希哲
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王瀠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王瀠（生于1586年），明人物。中国历代人物传记资料库（CBDB）以人物编号 207813 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1586年 | accepted |
| name.primary | 王瀠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_45n56RiQTWtDC21tW3p7zG | 王寶 | accepted |
| ancestors | p_8EVZxxAjXpWHbww1dEyK7t | 王希哲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寶（CBDB 236418）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236418&o=json)
- [中国历代人物传记资料库：王希哲（CBDB 236419）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236419&o=json)
- [中国历代人物传记资料库：王瀠（CBDB 207813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207813&o=json)
