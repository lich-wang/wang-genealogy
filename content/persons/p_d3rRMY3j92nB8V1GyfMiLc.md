---
schema: wang-person/v1
id: p_d3rRMY3j92nB8V1GyfMiLc
status: active
merged_into: null
display_name: 王同人
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_krZDeXWBrZcLZCgDXyVmjV
        subject_person_id: p_d3rRMY3j92nB8V1GyfMiLc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同人
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_98FYPrGVYco2Y76VJbzrxz
          claim_id: c_krZDeXWBrZcLZCgDXyVmjV
          source_id: s_Lz1aJbKkYc62PVeN7aXUjx
          stance: supports
          locator: CBDB:175747
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175747）
          source: &a1
            id: s_Lz1aJbKkYc62PVeN7aXUjx
            source_type: api_record
            title: 中国历代人物传记资料库：王同人（CBDB 175747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175747&o=json
            external_identifier: CBDB:175747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.096Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_sMXT75tLUk3Gd9yNsayyhM
        subject_person_id: p_d3rRMY3j92nB8V1GyfMiLc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 669年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M6CHawBcuJXQhiDzbDnApq
          claim_id: c_sMXT75tLUk3Gd9yNsayyhM
          source_id: s_Lz1aJbKkYc62PVeN7aXUjx
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
        id: c_n6UKPFFQnKM9PWGGvU3DLH
        subject_person_id: p_d3rRMY3j92nB8V1GyfMiLc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同人（卒于669年），唐人物。籍贯河南，曾任州刺史。（中国历代人物传记资料库 CBDB 175747）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8hIW2c_OShVpZYqoJ6moRd
          claim_id: c_n6UKPFFQnKM9PWGGvU3DLH
          source_id: s_Lz1aJbKkYc62PVeN7aXUjx
          stance: supports
          locator: CBDB:175747
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-QM2l1SYwLIFzetw_Bm7VS
        subject_person_id: p_woaKciykU5f6sViKiS8fnk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_d3rRMY3j92nB8V1GyfMiLc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2YSiAo-1YnlTL-XaEQ1xSD
          claim_id: c_-QM2l1SYwLIFzetw_Bm7VS
          source_id: s_Lz1aJbKkYc62PVeN7aXUjx
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_woaKciykU5f6sViKiS8fnk
        status: active
        display_name: 王大觀
        merged_into_person_id: null
  children:
    - claim:
        id: c_L-lE43duIFewLDEXCegzqn
        subject_person_id: p_d3rRMY3j92nB8V1GyfMiLc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T2JshioRPfxgoYHCxfDYxt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7AFniuGNveJkLtIPAGgRyo
          claim_id: c_L-lE43duIFewLDEXCegzqn
          source_id: s_Lz1aJbKkYc62PVeN7aXUjx
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_T2JshioRPfxgoYHCxfDYxt
        status: active
        display_name: 王守忠
        merged_into_person_id: null
    - claim:
        id: c_o3UIm_Cu3rCVmGd43uTp8E
        subject_person_id: p_d3rRMY3j92nB8V1GyfMiLc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hu6UFzbADC4tBdbNGcJyW4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YG8IIcNWmGRWdqIrJstHnB
          claim_id: c_o3UIm_Cu3rCVmGd43uTp8E
          source_id: s_Lz1aJbKkYc62PVeN7aXUjx
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Hu6UFzbADC4tBdbNGcJyW4
        status: active
        display_name: 王翁慶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王同人

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同人 | accepted |
| death.date | 669年 | accepted |
| bio.summary | 王同人（卒于669年），唐人物。籍贯河南，曾任州刺史。（中国历代人物传记资料库 CBDB 175747） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_woaKciykU5f6sViKiS8fnk | 王大觀 | accepted |
| children | p_T2JshioRPfxgoYHCxfDYxt | 王守忠 | accepted |
| children | p_Hu6UFzbADC4tBdbNGcJyW4 | 王翁慶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同人（CBDB 175747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175747&o=json)
