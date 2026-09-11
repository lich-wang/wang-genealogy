---
schema: wang-person/v1
id: p_HE5e4JMgdzoDwzM6FykZUf
status: active
merged_into: null
display_name: 王聮
cbdb_id: 202677
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zDDYLf9xkw45FLrzizViBH
        subject_person_id: p_HE5e4JMgdzoDwzM6FykZUf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聮（生于1500年），明人物。中国历代人物传记资料库（CBDB）以人物编号 202677 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_Nt-lY6NzqGHFmCBTlGZ5pf
          claim_id: c_zDDYLf9xkw45FLrzizViBH
          source_id: s_28r4toGevX3DFZa4xRverf
          stance: supports
          locator: CBDB:202677
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_28r4toGevX3DFZa4xRverf
            source_type: api_record
            title: 中国历代人物传记资料库：王聮（CBDB 202677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202677&o=json
            external_identifier: CBDB:202677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WFMLV4QJmywi2uXk6P9ESj
        subject_person_id: p_HE5e4JMgdzoDwzM6FykZUf
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1500年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1500-01-01
            latest: 1500-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UUgSH3J4WJ8YJs1duRwb5H
          claim_id: c_WFMLV4QJmywi2uXk6P9ESj
          source_id: s_28r4toGevX3DFZa4xRverf
          stance: supports
          locator: CBDB:202677
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1500
          source:
            id: s_28r4toGevX3DFZa4xRverf
            source_type: api_record
            title: 中国历代人物传记资料库：王聮（CBDB 202677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202677&o=json
            external_identifier: CBDB:202677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xgZNB228V8ZC4qjU26yt33
        subject_person_id: p_HE5e4JMgdzoDwzM6FykZUf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GLLH4pkJhx1iQouxg8uhgJ
          claim_id: c_xgZNB228V8ZC4qjU26yt33
          source_id: s_28r4toGevX3DFZa4xRverf
          stance: supports
          locator: CBDB:202677
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1500
          source:
            id: s_28r4toGevX3DFZa4xRverf
            source_type: api_record
            title: 中国历代人物传记资料库：王聮（CBDB 202677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202677&o=json
            external_identifier: CBDB:202677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_c6NDpK1zptPjGZsfpgKyVW
        subject_person_id: p_45EiG84QQT2n3AHG97tGmn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HE5e4JMgdzoDwzM6FykZUf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nJ91EnqP8F2-2hqnfGJJZu
          claim_id: c_c6NDpK1zptPjGZsfpgKyVW
          source_id: s_es3vxojSiF6C7MrRXppwJ2
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第三十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_es3vxojSiF6C7MrRXppwJ2
            source_type: api_record
            title: 中国历代人物传记资料库：王良（CBDB 292231）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292231&o=json
            external_identifier: CBDB:292231
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.393Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_45EiG84QQT2n3AHG97tGmn
        status: active
        display_name: 王良
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_jo5xVokZqtfG8i9NWkYXem
        subject_person_id: p_CXeTaA9iXLyiczUa3nfGgx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HE5e4JMgdzoDwzM6FykZUf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hVoeXVGFzMCz2_9YZbehyx
          claim_id: c_jo5xVokZqtfG8i9NWkYXem
          source_id: s_MKqN8AhMdtcmaPu1VA8D8R
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第三十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MKqN8AhMdtcmaPu1VA8D8R
            source_type: api_record
            title: 中国历代人物传记资料库：王瓉（CBDB 292230）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292230&o=json
            external_identifier: CBDB:292230
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.392Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CXeTaA9iXLyiczUa3nfGgx
        status: active
        display_name: 王瓉
        merged_into_person_id: null
    - claim:
        id: c_KamMWO9wZXuWFhmboLvybe
        subject_person_id: p_Vi3Ht1beehcWZYxW59bQfR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HE5e4JMgdzoDwzM6FykZUf
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-FzB9mfTbHW6jmZNmmyjpo
          claim_id: c_KamMWO9wZXuWFhmboLvybe
          source_id: s_yYZCF36nWYrDp8CEykULsL
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第三十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yYZCF36nWYrDp8CEykULsL
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 292228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292228&o=json
            external_identifier: CBDB:292228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.392Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Vi3Ht1beehcWZYxW59bQfR
        status: active
        display_name: 王福
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王聮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王聮（生于1500年），明人物。中国历代人物传记资料库（CBDB）以人物编号 202677 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1500年 | accepted |
| name.primary | 王聮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_45EiG84QQT2n3AHG97tGmn | 王良 | accepted |
| ancestors | p_CXeTaA9iXLyiczUa3nfGgx | 王瓉 | accepted |
| ancestors | p_Vi3Ht1beehcWZYxW59bQfR | 王福 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 292228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292228&o=json)
- [中国历代人物传记资料库：王聮（CBDB 202677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202677&o=json)
- [中国历代人物传记资料库：王良（CBDB 292231）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292231&o=json)
- [中国历代人物传记资料库：王瓉（CBDB 292230）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292230&o=json)
