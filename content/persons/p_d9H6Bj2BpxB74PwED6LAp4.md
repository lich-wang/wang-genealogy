---
schema: wang-person/v1
id: p_d9H6Bj2BpxB74PwED6LAp4
status: active
merged_into: null
display_name: 王林
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HTJh7JGakeQMTXr2HJWncH
        subject_person_id: p_d9H6Bj2BpxB74PwED6LAp4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LBo1WyydpMdDJpMtu9B28R
          claim_id: c_HTJh7JGakeQMTXr2HJWncH
          source_id: s_msnAKNajR6V131y4mMX2jA
          stance: supports
          locator: CBDB:142732
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142732）
          source: &a1
            id: s_msnAKNajR6V131y4mMX2jA
            source_type: api_record
            title: 中国历代人物传记资料库：王林（CBDB 142732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142732&o=json
            external_identifier: CBDB:142732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.592Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_r2vfYqVSDtBi3YBK6qD3x4
        subject_person_id: p_d9H6Bj2BpxB74PwED6LAp4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 594年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dXqyMAeCmUa8amnhFCoF42
          claim_id: c_r2vfYqVSDtBi3YBK6qD3x4
          source_id: s_msnAKNajR6V131y4mMX2jA
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
        id: c_yHFEgp9BavaDWG9ZAcnbPR
        subject_person_id: p_d9H6Bj2BpxB74PwED6LAp4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 657年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ydETVBBin1dEtcME9KJXaB
          claim_id: c_yHFEgp9BavaDWG9ZAcnbPR
          source_id: s_msnAKNajR6V131y4mMX2jA
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
        id: c_HQmAy7Nz2ggspJwSUyP5mw
        subject_person_id: p_d9H6Bj2BpxB74PwED6LAp4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_goDWrgoe8beuqkGHLxaUkE
          claim_id: c_HQmAy7Nz2ggspJwSUyP5mw
          source_id: s_msnAKNajR6V131y4mMX2jA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_V6rue4vr-YH3a9qcqX9Gn2
        subject_person_id: p_d9H6Bj2BpxB74PwED6LAp4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BRSg2KxUW5LjThmHp5B37r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h5ENJGAIwJ1YGq8Epxq1ct
          claim_id: c_V6rue4vr-YH3a9qcqX9Gn2
          source_id: s_T2mxjx3511rQ34LDfJ8Aza
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Chuigong20：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_T2mxjx3511rQ34LDfJ8Aza
            source_type: api_record
            title: 中国历代人物传记资料库：王哲（CBDB 162933）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162933&o=json
            external_identifier: CBDB:162933
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.956Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BRSg2KxUW5LjThmHp5B37r
        status: active
        display_name: 王哲
        merged_into_person_id: null
    - claim:
        id: c_zhc4ifeSuCxDraXCdk2EdB
        subject_person_id: p_d9H6Bj2BpxB74PwED6LAp4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i9FSRy4GUDPHuMS7PxNGHT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XSJuWF7ZsKM7e3pteDVW_k
          claim_id: c_zhc4ifeSuCxDraXCdk2EdB
          source_id: s_A9rPMEKupMy34J8KuF575i
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Chuigong20：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_A9rPMEKupMy34J8KuF575i
            source_type: api_record
            title: 中国历代人物传记资料库：王道（CBDB 162932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162932&o=json
            external_identifier: CBDB:162932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.955Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_i9FSRy4GUDPHuMS7PxNGHT
        status: active
        display_name: 王道
        merged_into_person_id: null
    - claim:
        id: c_GkGZXABag95Yy4_hjXI8ED
        subject_person_id: p_d9H6Bj2BpxB74PwED6LAp4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LkqiF66dP7UYJK7vNxYdb2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xsQkBs_7qiVfTDz15fe8qt
          claim_id: c_GkGZXABag95Yy4_hjXI8ED
          source_id: s_qpePK2ozgekqxb7AeDo5bd
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Chuigong20：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qpePK2ozgekqxb7AeDo5bd
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 162934）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162934&o=json
            external_identifier: CBDB:162934
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.956Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LkqiF66dP7UYJK7vNxYdb2
        status: active
        display_name: 王信
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_le5WZU4net6cSJDSWE49x4
        subject_person_id: p_bWHBrETwPeRBJYtc82ehET
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_d9H6Bj2BpxB74PwED6LAp4
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n5Q2mxLa-GR6_s2iWNxnxx
          claim_id: c_le5WZU4net6cSJDSWE49x4
          source_id: s_m2Mpm6TzLa2a2toGPpzj5F
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Chuigong20：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_m2Mpm6TzLa2a2toGPpzj5F
            source_type: api_record
            title: 中国历代人物传记资料库：王定（CBDB 162924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162924&o=json
            external_identifier: CBDB:162924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.955Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bWHBrETwPeRBJYtc82ehET
        status: active
        display_name: 王定
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王林 | accepted |
| birth.date | 594年 | accepted |
| death.date | 657年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_BRSg2KxUW5LjThmHp5B37r | 王哲 | accepted |
| children | p_i9FSRy4GUDPHuMS7PxNGHT | 王道 | accepted |
| children | p_LkqiF66dP7UYJK7vNxYdb2 | 王信 | accepted |
| ancestors | p_bWHBrETwPeRBJYtc82ehET | 王定 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道（CBDB 162932）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162932&o=json)
- [中国历代人物传记资料库：王定（CBDB 162924）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162924&o=json)
- [中国历代人物传记资料库：王林（CBDB 142732）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142732&o=json)
- [中国历代人物传记资料库：王信（CBDB 162934）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162934&o=json)
- [中国历代人物传记资料库：王哲（CBDB 162933）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162933&o=json)
