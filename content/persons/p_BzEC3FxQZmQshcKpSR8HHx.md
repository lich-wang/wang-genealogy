---
schema: wang-person/v1
id: p_BzEC3FxQZmQshcKpSR8HHx
status: active
merged_into: null
display_name: 王雲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_i437pfmg4cuVUGrDfAisac
        subject_person_id: p_BzEC3FxQZmQshcKpSR8HHx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CsBuLomLLKK9y97PWXLSkw
          claim_id: c_i437pfmg4cuVUGrDfAisac
          source_id: s_6tg181GfEavpwsgSRrvE1t
          stance: supports
          locator: CBDB:160565
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（160565）
          source: &a1
            id: s_6tg181GfEavpwsgSRrvE1t
            source_type: api_record
            title: 中国历代人物传记资料库：王雲（CBDB 160565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160565&o=json
            external_identifier: CBDB:160565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.940Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_waz95H3URELDSKDbEcPmDP
        subject_person_id: p_BzEC3FxQZmQshcKpSR8HHx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲，唐人物。籍贯琅琊，曾任縣丞。（中国历代人物传记资料库 CBDB 160565）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ib3GI-xv5FuXK_FI7Caqz9
          claim_id: c_waz95H3URELDSKDbEcPmDP
          source_id: s_6tg181GfEavpwsgSRrvE1t
          stance: supports
          locator: CBDB:160565
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZiQ280jupInGBEaNpR7cse
        subject_person_id: p_omcnEPxMUJWQetwYnKCLjF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BzEC3FxQZmQshcKpSR8HHx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v2HHSmq5M1aLGr1DcdMVVH
          claim_id: c_ZiQ280jupInGBEaNpR7cse
          source_id: s_6tg181GfEavpwsgSRrvE1t
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_omcnEPxMUJWQetwYnKCLjF
        status: active
        display_name: 王炅
        merged_into_person_id: null
  children:
    - claim:
        id: c_dbAaGZyRTMbO3df88KWfR6
        subject_person_id: p_BzEC3FxQZmQshcKpSR8HHx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ee5JePAZJhSK6NUqy8guZe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AwMrO3FAkFsdL3uW1_1RL1
          claim_id: c_dbAaGZyRTMbO3df88KWfR6
          source_id: s_6tg181GfEavpwsgSRrvE1t
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ee5JePAZJhSK6NUqy8guZe
        status: active
        display_name: 王公亮
        merged_into_person_id: null
    - claim:
        id: c_XUGtW7mbTYaTxhPQxtYt6V
        subject_person_id: p_BzEC3FxQZmQshcKpSR8HHx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_t6H1zNNGoqTrr1wuAW11VY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vxMqEsgQxJrSFrWir36DYT
          claim_id: c_XUGtW7mbTYaTxhPQxtYt6V
          source_id: s_6tg181GfEavpwsgSRrvE1t
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_t6H1zNNGoqTrr1wuAW11VY
        status: active
        display_name: 王宗
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_qKHE9XYecBr8AAbmHhRWdr
        subject_person_id: p_BzEC3FxQZmQshcKpSR8HHx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Ggn2t8z4X4B4wro6LB38G3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AxFZ63esuySh5wJiA2s8-R
          claim_id: c_qKHE9XYecBr8AAbmHhRWdr
          source_id: s_6tg181GfEavpwsgSRrvE1t
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 56：孫
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

# 王雲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲 | accepted |
| bio.summary | 王雲，唐人物。籍贯琅琊，曾任縣丞。（中国历代人物传记资料库 CBDB 160565） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_omcnEPxMUJWQetwYnKCLjF | 王炅 | accepted |
| children | p_Ee5JePAZJhSK6NUqy8guZe | 王公亮 | accepted |
| children | p_t6H1zNNGoqTrr1wuAW11VY | 王宗 | accepted |
| descendants | p_Ggn2t8z4X4B4wro6LB38G3 | 王虔暢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王雲（CBDB 160565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160565&o=json)
