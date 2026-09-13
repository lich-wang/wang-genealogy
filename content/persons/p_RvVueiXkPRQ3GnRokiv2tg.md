---
schema: wang-person/v1
id: p_RvVueiXkPRQ3GnRokiv2tg
status: active
merged_into: null
display_name: 王莚
cbdb_id: 206009
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mS7ZKTz1wWL9jPErHLheJW
        subject_person_id: p_RvVueiXkPRQ3GnRokiv2tg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王莚（生于1526年），史料所见人物。本项目依据《中国历代人物传记资料库：王莚（CBDB 206009）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_PYeX-TrZ8It2dXT2B1BFS_
          claim_id: c_mS7ZKTz1wWL9jPErHLheJW
          source_id: s_aDdqQJxR2vANbnmGMg1RXv
          stance: supports
          locator: CBDB:206009
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_aDdqQJxR2vANbnmGMg1RXv
            source_type: api_record
            title: 中国历代人物传记资料库：王莚（CBDB 206009）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206009&o=json
            external_identifier: CBDB:206009
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hRS175uZoPcYNRHz7SbSgk
        subject_person_id: p_RvVueiXkPRQ3GnRokiv2tg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1526年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1526-01-01
            latest: 1526-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tAwuwdN4TNVAGybuMswdDL
          claim_id: c_hRS175uZoPcYNRHz7SbSgk
          source_id: s_aDdqQJxR2vANbnmGMg1RXv
          stance: supports
          locator: CBDB:206009
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1526
          source:
            id: s_aDdqQJxR2vANbnmGMg1RXv
            source_type: api_record
            title: 中国历代人物传记资料库：王莚（CBDB 206009）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206009&o=json
            external_identifier: CBDB:206009
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RWQrWLS6gUvhTHjdBirQw6
        subject_person_id: p_RvVueiXkPRQ3GnRokiv2tg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王莚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7F6xcFGBTRR4GnXB9aY5xQ
          claim_id: c_RWQrWLS6gUvhTHjdBirQw6
          source_id: s_aDdqQJxR2vANbnmGMg1RXv
          stance: supports
          locator: CBDB:206009
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1526
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4iwyngyNcOx6vxIV3ULEau
        subject_person_id: p_FjEtN9HHE5cWHWRD9ddU2X
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RvVueiXkPRQ3GnRokiv2tg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_812fmjwpSz0ndZ4sL7QZ8i
          claim_id: c_4iwyngyNcOx6vxIV3ULEau
          source_id: s_b1K7y7CiNbij2Zu24rUgXG
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百九十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_b1K7y7CiNbij2Zu24rUgXG
            source_type: api_record
            title: 中国历代人物传记资料库：王浙（CBDB 212031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212031&o=json
            external_identifier: CBDB:212031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.053Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FjEtN9HHE5cWHWRD9ddU2X
        status: active
        display_name: 王浙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_crLz9NQC06QQ4qQ1ZpkI_p
        subject_person_id: p_gMG8uAnfaJVnuC4N3TBUbW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RvVueiXkPRQ3GnRokiv2tg
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jebTgmfmi1GGEiYuI1H5oy
          claim_id: c_crLz9NQC06QQ4qQ1ZpkI_p
          source_id: s_7kHQ9jaHbmYcgCzAS8jxVd
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百九十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7kHQ9jaHbmYcgCzAS8jxVd
            source_type: api_record
            title: 中国历代人物传记资料库：王惠（CBDB 212029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212029&o=json
            external_identifier: CBDB:212029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.047Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gMG8uAnfaJVnuC4N3TBUbW
        status: active
        display_name: 王惠
        merged_into_person_id: null
    - claim:
        id: c_h_yjV0K-HKfAiz63cVkrRW
        subject_person_id: p_gyMVNeL4zWkWNY6f196vvN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RvVueiXkPRQ3GnRokiv2tg
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xWWhxV0VEGrOGhGZmqzKtx
          claim_id: c_h_yjV0K-HKfAiz63cVkrRW
          source_id: s_xCFVEh858mg7v6XWZNHVSP
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百九十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xCFVEh858mg7v6XWZNHVSP
            source_type: api_record
            title: 中国历代人物传记资料库：王銘（CBDB 212030）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212030&o=json
            external_identifier: CBDB:212030
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.049Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gyMVNeL4zWkWNY6f196vvN
        status: active
        display_name: 王銘
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王莚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王莚（生于1526年），史料所见人物。本项目依据《中国历代人物传记资料库：王莚（CBDB 206009）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1526年 | accepted |
| name.primary | 王莚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FjEtN9HHE5cWHWRD9ddU2X | 王浙 | accepted |
| ancestors | p_gMG8uAnfaJVnuC4N3TBUbW | 王惠 | accepted |
| ancestors | p_gyMVNeL4zWkWNY6f196vvN | 王銘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惠（CBDB 212029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212029&o=json)
- [中国历代人物传记资料库：王銘（CBDB 212030）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212030&o=json)
- [中国历代人物传记资料库：王莚（CBDB 206009）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206009&o=json)
- [中国历代人物传记资料库：王浙（CBDB 212031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212031&o=json)
