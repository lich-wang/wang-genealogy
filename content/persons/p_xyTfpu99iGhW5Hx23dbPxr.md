---
schema: wang-person/v1
id: p_xyTfpu99iGhW5Hx23dbPxr
status: active
merged_into: null
display_name: 王旻
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sF4CvYadGt2eCCxi6gsgCe
        subject_person_id: p_xyTfpu99iGhW5Hx23dbPxr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8PbLJCDAxYz7CiyZPSwES8
          claim_id: c_sF4CvYadGt2eCCxi6gsgCe
          source_id: s_hDatWocGZXJZGef8fVd9AW
          stance: supports
          locator: CBDB:164167
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（164167）
          source: &a1
            id: s_hDatWocGZXJZGef8fVd9AW
            source_type: api_record
            title: 中国历代人物传记资料库：王旻（CBDB 164167）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164167&o=json
            external_identifier: CBDB:164167
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.963Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KcTDpBL2X4LL9y7TbSmwRU
        subject_person_id: p_xyTfpu99iGhW5Hx23dbPxr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旻，唐人物。身份为道士。（中国历代人物传记资料库 CBDB 164167）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Zk6vohit7yu-UGlpiFBs65
          claim_id: c_KcTDpBL2X4LL9y7TbSmwRU
          source_id: s_hDatWocGZXJZGef8fVd9AW
          stance: supports
          locator: CBDB:164167
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_h-Vy9trdvV2UCo-0nU2jGY
        subject_person_id: p_xyTfpu99iGhW5Hx23dbPxr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NMGGEKEYPRL4JFES9eiFC5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N9MkovHNV5v_qLaKwBoRK6
          claim_id: c_h-Vy9trdvV2UCo-0nU2jGY
          source_id: s_67z3K2TE2Ukgm1B3F7EVtW
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Kaiyuan120：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_67z3K2TE2Ukgm1B3F7EVtW
            source_type: api_record
            title: 中国历代人物传记资料库：王晛（CBDB 143703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143703&o=json
            external_identifier: CBDB:143703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.627Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NMGGEKEYPRL4JFES9eiFC5
        status: active
        display_name: 王晛
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王旻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王旻 | accepted |
| bio.summary | 王旻，唐人物。身份为道士。（中国历代人物传记资料库 CBDB 164167） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_NMGGEKEYPRL4JFES9eiFC5 | 王晛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王旻（CBDB 164167）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164167&o=json)
- [中国历代人物传记资料库：王晛（CBDB 143703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143703&o=json)
