---
schema: wang-person/v1
id: p_wgfYedxmMy9VG8HzciXPDK
status: active
merged_into: null
display_name: 王貞伯
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AK6wJfSvLWiQwpV312MQkW
        subject_person_id: p_wgfYedxmMy9VG8HzciXPDK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貞伯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2NALiodmBaqxVFzFGV8VZ4
          claim_id: c_AK6wJfSvLWiQwpV312MQkW
          source_id: s_UWNhJxKCrLH3yDWCS756HE
          stance: supports
          locator: CBDB:175692
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175692）
          source: &a1
            id: s_UWNhJxKCrLH3yDWCS756HE
            source_type: api_record
            title: 中国历代人物传记资料库：王貞伯（CBDB 175692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175692&o=json
            external_identifier: CBDB:175692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.246Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2P9W4K99jh92CnmFubLEnC
        subject_person_id: p_wgfYedxmMy9VG8HzciXPDK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 848年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YxcBwSLp1uJJukGfYaihy1
          claim_id: c_2P9W4K99jh92CnmFubLEnC
          source_id: s_UWNhJxKCrLH3yDWCS756HE
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
        id: c_7LutCGL1KRAXKtZiFCacyu
        subject_person_id: p_wgfYedxmMy9VG8HzciXPDK
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
        - id: cs_govdvS5DmyMU7unkvLFFK9
          claim_id: c_7LutCGL1KRAXKtZiFCacyu
          source_id: s_UWNhJxKCrLH3yDWCS756HE
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
        id: c_V5nLhh51pXXpjxW4Y5knhk
        subject_person_id: p_wgfYedxmMy9VG8HzciXPDK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1DDVjEqFvCNUptVH9S7M8L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nYklUxTq7Tvq0xXbxEbKjz
          claim_id: c_V5nLhh51pXXpjxW4Y5knhk
          source_id: s_bzSQxpvjzduzPGF88AimL6
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 8100：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bzSQxpvjzduzPGF88AimL6
            source_type: api_record
            title: 中国历代人物传记资料库：王蕘（CBDB 175696）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175696&o=json
            external_identifier: CBDB:175696
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.062Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1DDVjEqFvCNUptVH9S7M8L
        status: active
        display_name: 王蕘
        merged_into_person_id: null
    - claim:
        id: c_N5LxkyjN-VDiUixNqWBcq5
        subject_person_id: p_wgfYedxmMy9VG8HzciXPDK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Cn69EMt8ooB5ikYYJQTWaC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_woc2pcfzR_dpT3LWWChGdp
          claim_id: c_N5LxkyjN-VDiUixNqWBcq5
          source_id: s_HQNCQHGfWAKThYhXeZgUZ3
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HQNCQHGfWAKThYhXeZgUZ3
            source_type: api_record
            title: 中国历代人物传记资料库：王葆（CBDB 175693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175693&o=json
            external_identifier: CBDB:175693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.060Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Cn69EMt8ooB5ikYYJQTWaC
        status: active
        display_name: 王葆
        merged_into_person_id: null
    - claim:
        id: c_-mRYwiTW_QW7-tdTlDMNWZ
        subject_person_id: p_wgfYedxmMy9VG8HzciXPDK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iSxLyB45PSS63juDYWmSoG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pjGUf4RNy4VcxZzQj-Nf4u
          claim_id: c_-mRYwiTW_QW7-tdTlDMNWZ
          source_id: s_HoJx8v2MiZzMB1WNfsK9zT
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HoJx8v2MiZzMB1WNfsK9zT
            source_type: api_record
            title: 中国历代人物传记资料库：王蔚（CBDB 192827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192827&o=json
            external_identifier: CBDB:192827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.415Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iSxLyB45PSS63juDYWmSoG
        status: active
        display_name: 王蔚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王貞伯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貞伯 | accepted |
| death.date | 848年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1DDVjEqFvCNUptVH9S7M8L | 王蕘 | accepted |
| children | p_Cn69EMt8ooB5ikYYJQTWaC | 王葆 | accepted |
| children | p_iSxLyB45PSS63juDYWmSoG | 王蔚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王葆（CBDB 175693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175693&o=json)
- [中国历代人物传记资料库：王蕘（CBDB 175696）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175696&o=json)
- [中国历代人物传记资料库：王蔚（CBDB 192827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192827&o=json)
- [中国历代人物传记资料库：王貞伯（CBDB 175692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175692&o=json)
