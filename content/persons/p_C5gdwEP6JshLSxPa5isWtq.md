---
schema: wang-person/v1
id: p_C5gdwEP6JshLSxPa5isWtq
status: active
merged_into: null
display_name: 王异
cbdb_id: 17423
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4iMtGN6YCFD1a5pgMZTQcT
        subject_person_id: p_C5gdwEP6JshLSxPa5isWtq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王异
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8s64MrJt1qMfPjJAKp24aL
          claim_id: c_4iMtGN6YCFD1a5pgMZTQcT
          source_id: s_A5qwERCBYBB4o9rC5wm7KL
          stance: supports
          locator: Q45386110
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_A5qwERCBYBB4o9rC5wm7KL
            source_type: api_record
            title: 维基数据：王异（Q45386110）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45386110
            external_identifier: Q45386110
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_e8xepU66WHPrJ837fZk4wA
          claim_id: c_4iMtGN6YCFD1a5pgMZTQcT
          source_id: s_L33bdWsQPTsnWG6UgxsBXb
          stance: supports
          locator: CBDB:17423
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_L33bdWsQPTsnWG6UgxsBXb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王异（17423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17423&o=json
            external_identifier: CBDB:17423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kBiD6Y6HpCqXv8reSa4bb7
        subject_person_id: p_C5gdwEP6JshLSxPa5isWtq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王异，宋人物。籍贯歷城，入仕進士，曾任三司判官、右承議郎、太保。（中国历代人物传记资料库 CBDB 17423）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qBYWAMyvDWC82KYNC5mgXH
          claim_id: c_kBiD6Y6HpCqXv8reSa4bb7
          source_id: s_A5qwERCBYBB4o9rC5wm7KL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
        - id: cs_DW2nX3wlHT1o3DKmwpB6Pp
          claim_id: c_kBiD6Y6HpCqXv8reSa4bb7
          source_id: s_L33bdWsQPTsnWG6UgxsBXb
          stance: supports
          locator: CBDB:17423
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a2
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3nu30A3IKgAJdDUjlSU7Oj
        subject_person_id: p_AuvMJTzFGs5d4XX8kQYwFG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C5gdwEP6JshLSxPa5isWtq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1DSD5uSn3edei7CmJp2Mb7
          claim_id: c_3nu30A3IKgAJdDUjlSU7Oj
          source_id: s_6Lo94Zr29kvdTAw33vL95L
          stance: supports
          locator: CBDB 双向互证（子 王异 ⇄ 父 王繼文）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_6Lo94Zr29kvdTAw33vL95L
            source_type: api_record
            title: 中国历代人物传记资料库：王繼文（CBDB 17422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17422&o=json
            external_identifier: CBDB:17422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.659Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AuvMJTzFGs5d4XX8kQYwFG
        status: active
        display_name: 王繼文
        merged_into_person_id: null
  children:
    - claim:
        id: c_xNhK7D71rFc4ZBtdKPT3am
        subject_person_id: p_C5gdwEP6JshLSxPa5isWtq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4Hjde84UDSxNby7XrvDD1E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EJBahnccATR5Ck1CQFtfAP
          claim_id: c_xNhK7D71rFc4ZBtdKPT3am
          source_id: s_vRaCPeuuKnxFV9tq7HyLW3
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vRaCPeuuKnxFV9tq7HyLW3
            source_type: api_record
            title: 维基数据：王寂（Q45386119）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45386119
            external_identifier: Q45386119
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:10.721Z
            metadata_json: null
        - id: cs_b7fkQMVBcQ5Go6fMU4Ct77
          claim_id: c_xNhK7D71rFc4ZBtdKPT3am
          source_id: s_A5qwERCBYBB4o9rC5wm7KL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_4Hjde84UDSxNby7XrvDD1E
        status: active
        display_name: 王寂
        merged_into_person_id: null
    - claim:
        id: c_OoZswomvNVCLB3WiPWo0d6
        subject_person_id: p_C5gdwEP6JshLSxPa5isWtq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8pefMocZcx3Xt1bkSBWgB6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GegEwfHc820cistBJdpYip
          claim_id: c_OoZswomvNVCLB3WiPWo0d6
          source_id: s_nrAzHgzjmK1EQzr9DACQnY
          stance: supports
          locator: CBDB 双向互证（父 王异 ⇄ 子 王宿）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_nrAzHgzjmK1EQzr9DACQnY
            source_type: api_record
            title: 中国历代人物传记资料库：王宿（CBDB 17424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17424&o=json
            external_identifier: CBDB:17424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.659Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8pefMocZcx3Xt1bkSBWgB6
        status: active
        display_name: 王宿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_mdQJhS4rABsKkUnD1SQigZ
        subject_person_id: p_C5gdwEP6JshLSxPa5isWtq
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_cCBM6eQwG73XBEbNJVYY3H
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3N7L1ab64SgaFVzH-HVyLm
          claim_id: c_mdQJhS4rABsKkUnD1SQigZ
          source_id: s_7xc2IoH7j0Zr1hHLOstc1L
          stance: supports
          locator: 宋人傳記資料索引(電子版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7xc2IoH7j0Zr1hHLOstc1L
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王异妻)（CBDB 38571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38571&o=json
            external_identifier: CBDB:38571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cCBM6eQwG73XBEbNJVYY3H
        status: active
        display_name: 劉氏
        merged_into_person_id: null
    - claim:
        id: c_SfQ11BQhCrQMB9XVAqjwZ7
        subject_person_id: p_C5gdwEP6JshLSxPa5isWtq
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_KV7usuyqyMd5zCxkZhfMmL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MFWYtsT-i3lZatRvUbYKjn
          claim_id: c_SfQ11BQhCrQMB9XVAqjwZ7
          source_id: s_6iuiLUX9D_9JpSe_7Cs52N
          stance: supports
          locator: 宋人傳記資料索引(電子版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6iuiLUX9D_9JpSe_7Cs52N
            source_type: api_record
            title: 中国历代人物传记资料库：吳氏(王异妻)（CBDB 38573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38573&o=json
            external_identifier: CBDB:38573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KV7usuyqyMd5zCxkZhfMmL
        status: active
        display_name: 吳氏
        merged_into_person_id: null
  ancestors: []
  descendants:
    - claim:
        id: c_uHgXHBx1O6hFLV5NQir-9Y
        subject_person_id: p_C5gdwEP6JshLSxPa5isWtq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yapy3APS2bJCVFq3VNLaKZ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UOYb1WNGO78JuF4iqSG4yZ
          claim_id: c_uHgXHBx1O6hFLV5NQir-9Y
          source_id: s_L33bdWsQPTsnWG6UgxsBXb
          stance: supports
          locator: 宋人傳記資料索引(電子版)：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_yapy3APS2bJCVFq3VNLaKZ
        status: active
        display_name: 王次翁
        merged_into_person_id: null
    - claim:
        id: c_d91tEQpk9t0fgVgcb64rJ_
        subject_person_id: p_C5gdwEP6JshLSxPa5isWtq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oQdo3Yj5bXCs9YNdo4dHqm
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9VRtEkywb9r60J3PqIvqCo
          claim_id: c_d91tEQpk9t0fgVgcb64rJ_
          source_id: s_7y6SJqg5PmKgQMuECcxKDg
          stance: supports
          locator: CBDB 双向互证（祖父 王异 ⇄ 孫 王光祖）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_7y6SJqg5PmKgQMuECcxKDg
            source_type: api_record
            title: 中国历代人物传记资料库：王光祖（CBDB 17437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17437&o=json
            external_identifier: CBDB:17437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.662Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oQdo3Yj5bXCs9YNdo4dHqm
        status: active
        display_name: 王光祖
        merged_into_person_id: null
  other: []
---

# 王异

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王异 | accepted |
| bio.summary | 王异，宋人物。籍贯歷城，入仕進士，曾任三司判官、右承議郎、太保。（中国历代人物传记资料库 CBDB 17423） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AuvMJTzFGs5d4XX8kQYwFG | 王繼文 | accepted |
| children | p_4Hjde84UDSxNby7XrvDD1E | 王寂 | accepted |
| children | p_8pefMocZcx3Xt1bkSBWgB6 | 王宿 | accepted |
| spouses | p_cCBM6eQwG73XBEbNJVYY3H | 劉氏 | accepted |
| spouses | p_KV7usuyqyMd5zCxkZhfMmL | 吳氏 | accepted |
| descendants | p_yapy3APS2bJCVFq3VNLaKZ | 王次翁 | accepted |
| descendants | p_oQdo3Yj5bXCs9YNdo4dHqm | 王光祖 | accepted |

## 外部来源

- [维基数据：王寂（Q45386119）](https://www.wikidata.org/wiki/Q45386119)
- [维基数据：王异（Q45386110）](https://www.wikidata.org/wiki/Q45386110)
- [中国历代人物传记资料库：劉氏(王异妻)（CBDB 38571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38571&o=json)
- [中国历代人物传记资料库：王光祖（CBDB 17437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17437&o=json)
- [中国历代人物传记资料库：王繼文（CBDB 17422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17422&o=json)
- [中国历代人物传记资料库：王宿（CBDB 17424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17424&o=json)
- [中国历代人物传记资料库：吳氏(王异妻)（CBDB 38573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38573&o=json)
- [CBDB 中国历代人物传记资料库：王异（17423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17423&o=json)
