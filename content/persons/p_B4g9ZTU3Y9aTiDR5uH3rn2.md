---
schema: wang-person/v1
id: p_B4g9ZTU3Y9aTiDR5uH3rn2
status: active
merged_into: null
display_name: 王融
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VQAsUssKkdVFCZ1GnY14i4
        subject_person_id: p_B4g9ZTU3Y9aTiDR5uH3rn2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王融
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MRFSmxXoauCGQNkCMHjpPw
          claim_id: c_VQAsUssKkdVFCZ1GnY14i4
          source_id: s_4S8Kd5TDMrbhTNCMBEsEfc
          stance: supports
          locator: CBDB:145104
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145104）
          source: &a1
            id: s_4S8Kd5TDMrbhTNCMBEsEfc
            source_type: api_record
            title: 中国历代人物传记资料库：王融（CBDB 145104）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145104&o=json
            external_identifier: CBDB:145104
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.649Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Aj7rtJKkCkw6tC2idtUp7w
        subject_person_id: p_B4g9ZTU3Y9aTiDR5uH3rn2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 809年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PRCCVFX6ZRo3BydvZHgiPW
          claim_id: c_Aj7rtJKkCkw6tC2idtUp7w
          source_id: s_4S8Kd5TDMrbhTNCMBEsEfc
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
        id: c_9s791rEj2ecuy2ja1QsczP
        subject_person_id: p_B4g9ZTU3Y9aTiDR5uH3rn2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 872年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MquqwJW418YdoELecUYgj5
          claim_id: c_9s791rEj2ecuy2ja1QsczP
          source_id: s_4S8Kd5TDMrbhTNCMBEsEfc
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
        id: c_Wyu52KDs3rSHzVhd89BAF6
        subject_person_id: p_B4g9ZTU3Y9aTiDR5uH3rn2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王融（809年—872年），唐人物。籍贯洛陽，曾任陵臺令。（中国历代人物传记资料库 CBDB 145104）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Lz8VHbH5c5WuPHSuJxJuie
          claim_id: c_Wyu52KDs3rSHzVhd89BAF6
          source_id: s_4S8Kd5TDMrbhTNCMBEsEfc
          stance: supports
          locator: CBDB:145104
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zI9fT_rWAbQtdX98v4PoOU
        subject_person_id: p_tMG7KPDU3KLVpHRvgs3g63
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B4g9ZTU3Y9aTiDR5uH3rn2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J3UNL3VbjLIJUionMiYMes
          claim_id: c_zI9fT_rWAbQtdX98v4PoOU
          source_id: s_4S8Kd5TDMrbhTNCMBEsEfc
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tMG7KPDU3KLVpHRvgs3g63
        status: active
        display_name: 王會
        merged_into_person_id: null
  children:
    - claim:
        id: c_gp8iwf9RGyXmnn34efAHXE
        subject_person_id: p_B4g9ZTU3Y9aTiDR5uH3rn2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5quu7EU38pu4RjpArTsjie
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PXaZEjly_gzdm3vj8D8ouL
          claim_id: c_gp8iwf9RGyXmnn34efAHXE
          source_id: s_zV5qmeSoj8qH6xVzPMvj8z
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zV5qmeSoj8qH6xVzPMvj8z
            source_type: api_record
            title: 中国历代人物传记资料库：王肱（CBDB 190099）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190099&o=json
            external_identifier: CBDB:190099
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.315Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5quu7EU38pu4RjpArTsjie
        status: active
        display_name: 王肱
        merged_into_person_id: null
    - claim:
        id: c_Yl7U0XM3QapUu9tWTkR15O
        subject_person_id: p_B4g9ZTU3Y9aTiDR5uH3rn2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NjKvh1gAHRFWAeZGm7q2Qu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ByD3BhmFI1_jmYSm27Xvce
          claim_id: c_Yl7U0XM3QapUu9tWTkR15O
          source_id: s_4S8Kd5TDMrbhTNCMBEsEfc
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NjKvh1gAHRFWAeZGm7q2Qu
        status: active
        display_name: 王翃
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王融

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王融 | accepted |
| birth.date | 809年 | accepted |
| death.date | 872年 | accepted |
| bio.summary | 王融（809年—872年），唐人物。籍贯洛陽，曾任陵臺令。（中国历代人物传记资料库 CBDB 145104） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tMG7KPDU3KLVpHRvgs3g63 | 王會 | accepted |
| children | p_5quu7EU38pu4RjpArTsjie | 王肱 | accepted |
| children | p_NjKvh1gAHRFWAeZGm7q2Qu | 王翃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王肱（CBDB 190099）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190099&o=json)
- [中国历代人物传记资料库：王融（CBDB 145104）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145104&o=json)
