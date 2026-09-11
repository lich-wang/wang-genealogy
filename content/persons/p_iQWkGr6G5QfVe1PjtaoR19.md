---
schema: wang-person/v1
id: p_iQWkGr6G5QfVe1PjtaoR19
status: active
merged_into: null
display_name: 王弘祚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AkY3Y4b923NuBBQtCusmS1
        subject_person_id: p_iQWkGr6G5QfVe1PjtaoR19
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘祚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DpsvrStMkfvmJ4a6uxGcBd
          claim_id: c_AkY3Y4b923NuBBQtCusmS1
          source_id: s_nc1yYpYHGX2hSnL9Q71xtL
          stance: supports
          locator: CBDB:56970
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（56970）
          source: &a1
            id: s_nc1yYpYHGX2hSnL9Q71xtL
            source_type: api_record
            title: 中国历代人物传记资料库：王弘祚（CBDB 56970）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56970&o=json
            external_identifier: CBDB:56970
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.774Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MLF1rwg6cUMx3AqZGAyA8z
        subject_person_id: p_iQWkGr6G5QfVe1PjtaoR19
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1603年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XNwATmX9yjwHECoC7RgesF
          claim_id: c_MLF1rwg6cUMx3AqZGAyA8z
          source_id: s_nc1yYpYHGX2hSnL9Q71xtL
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
        id: c_DnEJobQ27V6y3Lt2EHUASD
        subject_person_id: p_iQWkGr6G5QfVe1PjtaoR19
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1674年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Z9cbSQULfoj3K6sATusqU
          claim_id: c_DnEJobQ27V6y3Lt2EHUASD
          source_id: s_nc1yYpYHGX2hSnL9Q71xtL
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
        id: c_VADkQm1CxFLck6J8tUiAjj
        subject_person_id: p_iQWkGr6G5QfVe1PjtaoR19
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FFVh6AwChBB9mQ7YKriani
          claim_id: c_VADkQm1CxFLck6J8tUiAjj
          source_id: s_nc1yYpYHGX2hSnL9Q71xtL
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
        id: c_QxMU-gGk9O3slSu3_pnV2S
        subject_person_id: p_qkvNUhkBZq6rv7KL4QvAKS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iQWkGr6G5QfVe1PjtaoR19
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FTuQKRyX0mtSITdOnMLqSP
          claim_id: c_QxMU-gGk9O3slSu3_pnV2S
          source_id: s_nc1yYpYHGX2hSnL9Q71xtL
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），186：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qkvNUhkBZq6rv7KL4QvAKS
        status: active
        display_name: 王國治
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_ZS0pKza5WTFLYtlo72Vbd0
        subject_person_id: p_iQWkGr6G5QfVe1PjtaoR19
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7mKHWPMU13pSpD87AVQtyv
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QUfL_ZtaAmLUAGIuWnGalM
          claim_id: c_ZS0pKza5WTFLYtlo72Vbd0
          source_id: s_nc1yYpYHGX2hSnL9Q71xtL
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），186：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7mKHWPMU13pSpD87AVQtyv
        status: active
        display_name: 王世珂
        merged_into_person_id: null
    - claim:
        id: c_z8xfNYRbSuSocDY6pI6KlQ
        subject_person_id: p_iQWkGr6G5QfVe1PjtaoR19
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5AmpJfE9okc2qc7UJySU8r
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pOYb6XwgLhb-DWEIB4X_Qu
          claim_id: c_z8xfNYRbSuSocDY6pI6KlQ
          source_id: s_nc1yYpYHGX2hSnL9Q71xtL
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），186：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5AmpJfE9okc2qc7UJySU8r
        status: active
        display_name: 王世瀚
        merged_into_person_id: null
    - claim:
        id: c_u5YgjoezECgJy8wn5Tn8cR
        subject_person_id: p_iQWkGr6G5QfVe1PjtaoR19
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_E1CJgmfgdR62qzmZbyMDrg
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AUOB5kGZXW8-uYZJ_VB40r
          claim_id: c_u5YgjoezECgJy8wn5Tn8cR
          source_id: s_nc1yYpYHGX2hSnL9Q71xtL
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），186：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_E1CJgmfgdR62qzmZbyMDrg
        status: active
        display_name: 王世湻
        merged_into_person_id: null
  other: []
---

# 王弘祚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弘祚 | accepted |
| birth.date | 1603年 | accepted |
| death.date | 1674年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qkvNUhkBZq6rv7KL4QvAKS | 王國治 | accepted |
| descendants | p_7mKHWPMU13pSpD87AVQtyv | 王世珂 | accepted |
| descendants | p_5AmpJfE9okc2qc7UJySU8r | 王世瀚 | accepted |
| descendants | p_E1CJgmfgdR62qzmZbyMDrg | 王世湻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弘祚（CBDB 56970）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56970&o=json)
