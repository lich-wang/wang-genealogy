---
schema: wang-person/v1
id: p_5DyZb4VPN6kQ3yNqbGjxpz
status: active
merged_into: null
display_name: 王邵
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fg9nyq7DxqzXc9QNJHK6NG
        subject_person_id: p_5DyZb4VPN6kQ3yNqbGjxpz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vDTKRxRe9EGyHrBDFygeJq
          claim_id: c_Fg9nyq7DxqzXc9QNJHK6NG
          source_id: s_djtoCsz5bs8P8NA1pp3FyJ
          stance: supports
          locator: CBDB:175701
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175701）
          source: &a1
            id: s_djtoCsz5bs8P8NA1pp3FyJ
            source_type: api_record
            title: 中国历代人物传记资料库：王邵（CBDB 175701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175701&o=json
            external_identifier: CBDB:175701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.064Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_r9ZMENQmqdf5fL98fE1EdQ
        subject_person_id: p_5DyZb4VPN6kQ3yNqbGjxpz
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 584年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f3CEyvABx7jotCpu67xLCm
          claim_id: c_r9ZMENQmqdf5fL98fE1EdQ
          source_id: s_djtoCsz5bs8P8NA1pp3FyJ
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
        id: c_mVNHQeoL33hrB5ZCu5XJbg
        subject_person_id: p_5DyZb4VPN6kQ3yNqbGjxpz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邵（卒于584年），南北朝人物。籍贯北芒山，身份为詩人，曾任秘書監。（中国历代人物传记资料库 CBDB 175701）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RaP5einfC8-PRt2M03TvXk
          claim_id: c_mVNHQeoL33hrB5ZCu5XJbg
          source_id: s_djtoCsz5bs8P8NA1pp3FyJ
          stance: supports
          locator: CBDB:175701
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nEouT8fbGDBTnKWbTl7vTA
        subject_person_id: p_WPVAqcRtnt1HvYAsfmkMSQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5DyZb4VPN6kQ3yNqbGjxpz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dhy1nJjXfDNVeXuU7BgihN
          claim_id: c_nEouT8fbGDBTnKWbTl7vTA
          source_id: s_djtoCsz5bs8P8NA1pp3FyJ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WPVAqcRtnt1HvYAsfmkMSQ
        status: active
        display_name: 王松年
        merged_into_person_id: null
  children:
    - claim:
        id: c_7pSv6_A2fQ60Ig2JAPf9tj
        subject_person_id: p_5DyZb4VPN6kQ3yNqbGjxpz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AdgrHD2drpt44saj1nVHwe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1-Z2TNRzuK3BBMz8QoDCnk
          claim_id: c_7pSv6_A2fQ60Ig2JAPf9tj
          source_id: s_djtoCsz5bs8P8NA1pp3FyJ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AdgrHD2drpt44saj1nVHwe
        status: active
        display_name: 王孝京
        merged_into_person_id: null
    - claim:
        id: c_SB2gHCyIs95YOu_Coqk4Nk
        subject_person_id: p_5DyZb4VPN6kQ3yNqbGjxpz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_45U8WA4P34ndoiEMxk4qRw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w_KptxIKdKQB7oozbevjVO
          claim_id: c_SB2gHCyIs95YOu_Coqk4Nk
          source_id: s_djtoCsz5bs8P8NA1pp3FyJ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_45U8WA4P34ndoiEMxk4qRw
        status: active
        display_name: 王孝柔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王邵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邵 | accepted |
| death.date | 584年 | accepted |
| bio.summary | 王邵（卒于584年），南北朝人物。籍贯北芒山，身份为詩人，曾任秘書監。（中国历代人物传记资料库 CBDB 175701） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WPVAqcRtnt1HvYAsfmkMSQ | 王松年 | accepted |
| children | p_AdgrHD2drpt44saj1nVHwe | 王孝京 | accepted |
| children | p_45U8WA4P34ndoiEMxk4qRw | 王孝柔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邵（CBDB 175701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175701&o=json)
