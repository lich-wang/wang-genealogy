---
schema: wang-person/v1
id: p_PtYEMqNo3Ja6CBRf3JpwLp
status: active
merged_into: null
display_name: 王希儁
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cKTzoovxrjHPzUAUX9Rirz
        subject_person_id: p_PtYEMqNo3Ja6CBRf3JpwLp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希儁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_psDemwJPCry8jEtZrQJN8C
          claim_id: c_cKTzoovxrjHPzUAUX9Rirz
          source_id: s_xrt4f93dp6af9Q6LA6B4bQ
          stance: supports
          locator: CBDB:160576
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（160576）
          source: &a1
            id: s_xrt4f93dp6af9Q6LA6B4bQ
            source_type: api_record
            title: 中国历代人物传记资料库：王希儁（CBDB 160576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160576&o=json
            external_identifier: CBDB:160576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.942Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_irr61P236DbxwGYnaDHot6
        subject_person_id: p_PtYEMqNo3Ja6CBRf3JpwLp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希儁，唐人物。籍贯琅琊，曾任太僕卿、州刺史。（中国历代人物传记资料库 CBDB 160576）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ywebJtMTvARsHMDA8E74i0
          claim_id: c_irr61P236DbxwGYnaDHot6
          source_id: s_xrt4f93dp6af9Q6LA6B4bQ
          stance: supports
          locator: CBDB:160576
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8rQhl6ScHRCp0ltkVwgHZL
        subject_person_id: p_udJhspqYupxBrMrGfyAX3E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PtYEMqNo3Ja6CBRf3JpwLp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nvYPykEa4KIHbJhWsvjw7h
          claim_id: c_8rQhl6ScHRCp0ltkVwgHZL
          source_id: s_xrt4f93dp6af9Q6LA6B4bQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_udJhspqYupxBrMrGfyAX3E
        status: active
        display_name: 王守真
        merged_into_person_id: null
  children:
    - claim:
        id: c_SxE-zTc1iHItW8ak5wqyI9
        subject_person_id: p_PtYEMqNo3Ja6CBRf3JpwLp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_abn5c1tn73gUjznNrJ2LNQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rz-uaA4SVmWgzYxK5hbxwa
          claim_id: c_SxE-zTc1iHItW8ak5wqyI9
          source_id: s_WHWWEPdNPKmd9uP6e8NVey
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WHWWEPdNPKmd9uP6e8NVey
            source_type: api_record
            title: 中国历代人物传记资料库：王旻（CBDB 189911）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189911&o=json
            external_identifier: CBDB:189911
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_abn5c1tn73gUjznNrJ2LNQ
        status: active
        display_name: 王旻
        merged_into_person_id: null
    - claim:
        id: c_R01Rmox6ljYtsLvKBRFkiM
        subject_person_id: p_PtYEMqNo3Ja6CBRf3JpwLp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CXPhv1yMRrDsksLp4YScNa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c2CifqvCHuKVnBWUdb4ScU
          claim_id: c_R01Rmox6ljYtsLvKBRFkiM
          source_id: s_cyNnsHNxdYYqEZ639duDEo
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cyNnsHNxdYYqEZ639duDEo
            source_type: api_record
            title: 中国历代人物传记资料库：王暹（CBDB 160564）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160564&o=json
            external_identifier: CBDB:160564
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.940Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CXPhv1yMRrDsksLp4YScNa
        status: active
        display_name: 王暹
        merged_into_person_id: null
    - claim:
        id: c_p6VdfFyMGs82dQHcGsSkbr
        subject_person_id: p_PtYEMqNo3Ja6CBRf3JpwLp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_omcnEPxMUJWQetwYnKCLjF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_atWzRlMX_h5F93u1tnegt3
          claim_id: c_p6VdfFyMGs82dQHcGsSkbr
          source_id: s_cCzKSa17QMxMtnFYQLNKef
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cCzKSa17QMxMtnFYQLNKef
            source_type: api_record
            title: 中国历代人物传记资料库：王炅（CBDB 157068）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157068&o=json
            external_identifier: CBDB:157068
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_omcnEPxMUJWQetwYnKCLjF
        status: active
        display_name: 王炅
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_by5WkTaV7Wdm7YhKo7_ZEB
        subject_person_id: p_PtYEMqNo3Ja6CBRf3JpwLp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Ggn2t8z4X4B4wro6LB38G3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vgee0uUD7LapQVgHlVCkyN
          claim_id: c_by5WkTaV7Wdm7YhKo7_ZEB
          source_id: s_xrt4f93dp6af9Q6LA6B4bQ
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 56：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ggn2t8z4X4B4wro6LB38G3
        status: active
        display_name: 王虔暢
        merged_into_person_id: null
  other: []
---

# 王希儁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希儁 | accepted |
| bio.summary | 王希儁，唐人物。籍贯琅琊，曾任太僕卿、州刺史。（中国历代人物传记资料库 CBDB 160576） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_udJhspqYupxBrMrGfyAX3E | 王守真 | accepted |
| children | p_abn5c1tn73gUjznNrJ2LNQ | 王旻 | accepted |
| children | p_CXPhv1yMRrDsksLp4YScNa | 王暹 | accepted |
| children | p_omcnEPxMUJWQetwYnKCLjF | 王炅 | accepted |
| descendants | p_Ggn2t8z4X4B4wro6LB38G3 | 王虔暢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王炅（CBDB 157068）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157068&o=json)
- [中国历代人物传记资料库：王旻（CBDB 189911）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189911&o=json)
- [中国历代人物传记资料库：王希儁（CBDB 160576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160576&o=json)
- [中国历代人物传记资料库：王暹（CBDB 160564）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160564&o=json)
