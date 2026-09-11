---
schema: wang-person/v1
id: p_sEGDXi7ck4pKNAhddgmbiq
status: active
merged_into: null
display_name: 王珹
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yHodAXPh3zkckeMgheGD9X
        subject_person_id: p_sEGDXi7ck4pKNAhddgmbiq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vsFki4FrRegVLeF7KWeGQK
          claim_id: c_yHodAXPh3zkckeMgheGD9X
          source_id: s_t2VA7WS1nJbLWR9WK7ND6Q
          stance: supports
          locator: CBDB:37927
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37927）
          source: &a1
            id: s_t2VA7WS1nJbLWR9WK7ND6Q
            source_type: api_record
            title: 中国历代人物传记资料库：王珹（CBDB 37927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37927&o=json
            external_identifier: CBDB:37927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.294Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UJ65fmzC6gcFveSvJBTpPV
        subject_person_id: p_sEGDXi7ck4pKNAhddgmbiq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1247年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZDc67hEuULpSSpMmheTToD
          claim_id: c_UJ65fmzC6gcFveSvJBTpPV
          source_id: s_t2VA7WS1nJbLWR9WK7ND6Q
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_SNMQbeuGTNBPpR8aMGBLAw
        subject_person_id: p_sEGDXi7ck4pKNAhddgmbiq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1324年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vc7eGtZuZyAJJcb7BzDFBB
          claim_id: c_SNMQbeuGTNBPpR8aMGBLAw
          source_id: s_t2VA7WS1nJbLWR9WK7ND6Q
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
        id: c_1CSxUWypkRzGdGRnfTNAgz
        subject_person_id: p_sEGDXi7ck4pKNAhddgmbiq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YFiMap5ZzVd4tV9VESMnp2
          claim_id: c_1CSxUWypkRzGdGRnfTNAgz
          source_id: s_t2VA7WS1nJbLWR9WK7ND6Q
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_es5wqjHV6g8TqflRXweVuO
        subject_person_id: p_WU918HK6TTpAXfqW367rRb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sEGDXi7ck4pKNAhddgmbiq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dfOLfHltqPp1OPxjG8dd8I
          claim_id: c_es5wqjHV6g8TqflRXweVuO
          source_id: s_t2VA7WS1nJbLWR9WK7ND6Q
          stance: supports
          locator: CBDB 双向互证（父 王侊 ⇄ 子 王珹）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_WU918HK6TTpAXfqW367rRb
        status: active
        display_name: 王侊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Kye7Asqoe0Fi-wqOMYn-to
        subject_person_id: p_XQD6YTcmUp8iw8hEQgNgEp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sEGDXi7ck4pKNAhddgmbiq
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Mq2-gh5ugEldfLaeLomLe
          claim_id: c_Kye7Asqoe0Fi-wqOMYn-to
          source_id: s_t2VA7WS1nJbLWR9WK7ND6Q
          stance: supports
          locator: 宋人傳記資料索引(電子版)：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XQD6YTcmUp8iw8hEQgNgEp
        status: active
        display_name: 王槐
        merged_into_person_id: null
    - claim:
        id: c_ANLYtFbQBOG423Qt27UaAd
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sEGDXi7ck4pKNAhddgmbiq
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dlfoW0WXyvBPqrPzJkN6Ku
          claim_id: c_ANLYtFbQBOG423Qt27UaAd
          source_id: s_bDr42YdofJ3M2VBGUPzaxN
          stance: supports
          locator: CBDB 双向互证（玄孫;四世孫 王珹 ⇄ 高祖;四世祖 王師心）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_bDr42YdofJ3M2VBGUPzaxN
            source_type: api_record
            title: 中国历代人物传记资料库：王師心（CBDB 1872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1872&o=json
            external_identifier: CBDB:1872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.366Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bkMbqmq6U23rFXaG17Pxzk
        status: active
        display_name: 王師心
        merged_into_person_id: null
    - claim:
        id: c_4Mya2ksJV3l8UHeGcFrNK0
        subject_person_id: p_3qCiu5YYp75Z2KhRimvju5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sEGDXi7ck4pKNAhddgmbiq
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tE4RJQJhLIkA2ZHygsslJq
          claim_id: c_4Mya2ksJV3l8UHeGcFrNK0
          source_id: s_t2VA7WS1nJbLWR9WK7ND6Q
          stance: supports
          locator: CBDB 双向互证（曾祖 王渷 ⇄ 曾孫; 重孫 王珹）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_3qCiu5YYp75Z2KhRimvju5
        status: active
        display_name: 王渷
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_GOxZW5RJsa9M0rakwdkZjw
        subject_person_id: p_sEGDXi7ck4pKNAhddgmbiq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7RLc12y6xs19zQxLBXraEh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sgDUktqzvXKN2X8RttaLm6
          claim_id: c_GOxZW5RJsa9M0rakwdkZjw
          source_id: s_EKAKvM2JvuN3r9GHynimhf
          stance: supports
          locator: CBDB 双向互证（祖父 王珹 ⇄ 孫 王閑）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_EKAKvM2JvuN3r9GHynimhf
            source_type: api_record
            title: 中国历代人物传记资料库：王閑（CBDB 437572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437572&o=json
            external_identifier: CBDB:437572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.057Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7RLc12y6xs19zQxLBXraEh
        status: active
        display_name: 王閑
        merged_into_person_id: null
    - claim:
        id: c_nueCWUog79Pxbl9AUlaXFA
        subject_person_id: p_sEGDXi7ck4pKNAhddgmbiq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BWLpn2m5ez2Mb7GKR9SuBc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2XZ10FyCCPF7-EyWL6ZBCS
          claim_id: c_nueCWUog79Pxbl9AUlaXFA
          source_id: s_1P2U5PSqQc9N72yEK55M1d
          stance: supports
          locator: CBDB 双向互证（祖父 王珹 ⇄ 孫 王誾）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_1P2U5PSqQc9N72yEK55M1d
            source_type: api_record
            title: 中国历代人物传记资料库：王誾（CBDB 437574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437574&o=json
            external_identifier: CBDB:437574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.058Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BWLpn2m5ez2Mb7GKR9SuBc
        status: active
        display_name: 王誾
        merged_into_person_id: null
    - claim:
        id: c_cbh7coSw5bE8trjdG_qfXZ
        subject_person_id: p_sEGDXi7ck4pKNAhddgmbiq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_F65fyHA3R3cZdZrkvWS1b5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T4Eb5L2RK7bGhuV9HJmA26
          claim_id: c_cbh7coSw5bE8trjdG_qfXZ
          source_id: s_3DbDW983GUmkuEUa51P8jS
          stance: supports
          locator: CBDB 双向互证（祖父 王珹 ⇄ 孫 王閏）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_3DbDW983GUmkuEUa51P8jS
            source_type: api_record
            title: 中国历代人物传记资料库：王閏（CBDB 437573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437573&o=json
            external_identifier: CBDB:437573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.057Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_F65fyHA3R3cZdZrkvWS1b5
        status: active
        display_name: 王閏
        merged_into_person_id: null
    - claim:
        id: c_s_MZf1KsolZTBaNEU5cIP4
        subject_person_id: p_sEGDXi7ck4pKNAhddgmbiq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1431HGAmYD7oniXmz3XgqC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_abzrGF74WusgN33fvGUcxe
          claim_id: c_s_MZf1KsolZTBaNEU5cIP4
          source_id: s_t2VA7WS1nJbLWR9WK7ND6Q
          stance: supports
          locator: CBDB 双向互证（孫 王閶 ⇄ 祖父 王珹）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_1431HGAmYD7oniXmz3XgqC
        status: active
        display_name: 王閶
        merged_into_person_id: null
  other: []
---

# 王珹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珹 | accepted |
| birth.date | 1247年 | accepted |
| death.date | 1324年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WU918HK6TTpAXfqW367rRb | 王侊 | accepted |
| ancestors | p_XQD6YTcmUp8iw8hEQgNgEp | 王槐 | accepted |
| ancestors | p_bkMbqmq6U23rFXaG17Pxzk | 王師心 | accepted |
| ancestors | p_3qCiu5YYp75Z2KhRimvju5 | 王渷 | accepted |
| descendants | p_7RLc12y6xs19zQxLBXraEh | 王閑 | accepted |
| descendants | p_BWLpn2m5ez2Mb7GKR9SuBc | 王誾 | accepted |
| descendants | p_F65fyHA3R3cZdZrkvWS1b5 | 王閏 | accepted |
| descendants | p_1431HGAmYD7oniXmz3XgqC | 王閶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珹（CBDB 37927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37927&o=json)
- [中国历代人物传记资料库：王閏（CBDB 437573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437573&o=json)
- [中国历代人物传记资料库：王師心（CBDB 1872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1872&o=json)
- [中国历代人物传记资料库：王閑（CBDB 437572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437572&o=json)
- [中国历代人物传记资料库：王誾（CBDB 437574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437574&o=json)
