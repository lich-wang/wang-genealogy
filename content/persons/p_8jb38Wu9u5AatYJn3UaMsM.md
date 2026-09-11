---
schema: wang-person/v1
id: p_8jb38Wu9u5AatYJn3UaMsM
status: active
merged_into: null
display_name: 王日新
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MiBPjCFvDxNu1Ybr6cAPde
        subject_person_id: p_8jb38Wu9u5AatYJn3UaMsM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jBkgG3cJB1DqRNr3H8r7Qs
          claim_id: c_MiBPjCFvDxNu1Ybr6cAPde
          source_id: s_SyB5HGjSVhCMX3rywmiE46
          stance: supports
          locator: CBDB:175756
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175756）
          source: &a1
            id: s_SyB5HGjSVhCMX3rywmiE46
            source_type: api_record
            title: 中国历代人物传记资料库：王日新（CBDB 175756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175756&o=json
            external_identifier: CBDB:175756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.103Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_FNGH6KVn4aDNZ1ufV6t6Bs
        subject_person_id: p_8jb38Wu9u5AatYJn3UaMsM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 736年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FeWNQZ2ytgShWyLM6yB6XF
          claim_id: c_FNGH6KVn4aDNZ1ufV6t6Bs
          source_id: s_SyB5HGjSVhCMX3rywmiE46
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
        id: c_Mo5eiEJ5qw4vYe9BqcR7LM
        subject_person_id: p_8jb38Wu9u5AatYJn3UaMsM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日新（卒于736年），唐人物。籍贯長洲，曾任縣令。（中国历代人物传记资料库 CBDB 175756）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_T_LI6aTJ6a_j_Awz_FZEpa
          claim_id: c_Mo5eiEJ5qw4vYe9BqcR7LM
          source_id: s_SyB5HGjSVhCMX3rywmiE46
          stance: supports
          locator: CBDB:175756
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5WxG7A3HA9Jr3h6Vzcz9u-
        subject_person_id: p_Hu6UFzbADC4tBdbNGcJyW4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8jb38Wu9u5AatYJn3UaMsM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pt746-wqPzJ0UHQXGRqLBE
          claim_id: c_5WxG7A3HA9Jr3h6Vzcz9u-
          source_id: s_SyB5HGjSVhCMX3rywmiE46
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Hu6UFzbADC4tBdbNGcJyW4
        status: active
        display_name: 王翁慶
        merged_into_person_id: null
  children:
    - claim:
        id: c_QdD2b1-8E0d2li8YzDtyD5
        subject_person_id: p_8jb38Wu9u5AatYJn3UaMsM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cZX36FsZfyp13UCG1A5dAD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GipEEFj7q30lCCWglr-JdO
          claim_id: c_QdD2b1-8E0d2li8YzDtyD5
          source_id: s_SyB5HGjSVhCMX3rywmiE46
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cZX36FsZfyp13UCG1A5dAD
        status: active
        display_name: 王子建
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王日新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王日新 | accepted |
| death.date | 736年 | accepted |
| bio.summary | 王日新（卒于736年），唐人物。籍贯長洲，曾任縣令。（中国历代人物传记资料库 CBDB 175756） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Hu6UFzbADC4tBdbNGcJyW4 | 王翁慶 | accepted |
| children | p_cZX36FsZfyp13UCG1A5dAD | 王子建 | accepted |

## 外部来源

- [中国历代人物传记资料库：王日新（CBDB 175756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175756&o=json)
