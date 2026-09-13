---
schema: wang-person/v1
id: p_5btbNFkuNqxJDcg99ibvfp
status: active
merged_into: null
display_name: 王崇儉
cbdb_id: 126688
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ydagx6rN45LDDPiWSqwkCH
        subject_person_id: p_5btbNFkuNqxJDcg99ibvfp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇儉，明人物。明清進士進士，籍贯曹縣，入仕進士。（中国历代人物传记资料库 CBDB 126688）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_rvPLIEKn1y3UtbSLPgq2ef
          claim_id: c_ydagx6rN45LDDPiWSqwkCH
          source_id: s_msDq6t2U1Lt2eKeiBmeNmL
          stance: supports
          locator: CBDB:126688
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_msDq6t2U1Lt2eKeiBmeNmL
            source_type: api_record
            title: 中国历代人物传记资料库：王崇儉（CBDB 126688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126688&o=json
            external_identifier: CBDB:126688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q7aSBqn3KtnNKrQ4FZrVMo
        subject_person_id: p_5btbNFkuNqxJDcg99ibvfp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇儉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2S2xVJ1xem7J1Amw1RfLhN
          claim_id: c_Q7aSBqn3KtnNKrQ4FZrVMo
          source_id: s_msDq6t2U1Lt2eKeiBmeNmL
          stance: supports
          locator: CBDB:126688
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BxADcTP4WGBJymM-FPu5GK
        subject_person_id: p_7xPYAwpK8PS9R7QKy5varP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5btbNFkuNqxJDcg99ibvfp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0Pp-H_l9rm7uCP_LKgRJp0
          claim_id: c_BxADcTP4WGBJymM-FPu5GK
          source_id: s_Vys9dZU9Gy34qAcr5P9Ciw
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第二十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Vys9dZU9Gy34qAcr5P9Ciw
            source_type: api_record
            title: 中国历代人物传记资料库：王珣（CBDB 266132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266132&o=json
            external_identifier: CBDB:266132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.716Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7xPYAwpK8PS9R7QKy5varP
        status: active
        display_name: 王珣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_oDmPaARDQFfPw_9yiDc6wD
        subject_person_id: p_DHkLaNrhXTyY2QbEp4wQXF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5btbNFkuNqxJDcg99ibvfp
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2jD0nRBJonsjPPaYt-wK6n
          claim_id: c_oDmPaARDQFfPw_9yiDc6wD
          source_id: s_h91pP7drCfPBv5PNUZEpMa
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第二十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_h91pP7drCfPBv5PNUZEpMa
            source_type: api_record
            title: 中国历代人物传记资料库：王導（CBDB 266130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266130&o=json
            external_identifier: CBDB:266130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.713Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DHkLaNrhXTyY2QbEp4wQXF
        status: active
        display_name: 王導
        merged_into_person_id: null
    - claim:
        id: c__lTIKzDh1vBgkjcvUnj8-h
        subject_person_id: p_iop7T8p6oTGjVpH3wXMe3j
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5btbNFkuNqxJDcg99ibvfp
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TyIuQ0R-L0a88PxX7IuAkd
          claim_id: c__lTIKzDh1vBgkjcvUnj8-h
          source_id: s_LqJQUzPTMHjFe1bT4CDBm8
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第二十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LqJQUzPTMHjFe1bT4CDBm8
            source_type: api_record
            title: 中国历代人物传记资料库：王蘭（CBDB 266131）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266131&o=json
            external_identifier: CBDB:266131
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.715Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iop7T8p6oTGjVpH3wXMe3j
        status: active
        display_name: 王蘭
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王崇儉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王崇儉，明人物。明清進士進士，籍贯曹縣，入仕進士。（中国历代人物传记资料库 CBDB 126688） | accepted |
| name.primary | 王崇儉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7xPYAwpK8PS9R7QKy5varP | 王珣 | accepted |
| ancestors | p_DHkLaNrhXTyY2QbEp4wQXF | 王導 | accepted |
| ancestors | p_iop7T8p6oTGjVpH3wXMe3j | 王蘭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇儉（CBDB 126688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126688&o=json)
- [中国历代人物传记资料库：王導（CBDB 266130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266130&o=json)
- [中国历代人物传记资料库：王蘭（CBDB 266131）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266131&o=json)
- [中国历代人物传记资料库：王珣（CBDB 266132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266132&o=json)
