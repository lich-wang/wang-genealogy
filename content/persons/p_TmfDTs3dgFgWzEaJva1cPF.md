---
schema: wang-person/v1
id: p_TmfDTs3dgFgWzEaJva1cPF
status: active
merged_into: null
display_name: 王親臣
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L4WBN5wvp14RJEvABxZ8RB
        subject_person_id: p_TmfDTs3dgFgWzEaJva1cPF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王親臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ck4ysRoK92s2eLvQXEaowK
          claim_id: c_L4WBN5wvp14RJEvABxZ8RB
          source_id: s_23UewykmuD3GRe5tZEivSH
          stance: supports
          locator: CBDB:324372
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（324372）
          source: &a1
            id: s_23UewykmuD3GRe5tZEivSH
            source_type: api_record
            title: 中国历代人物传记资料库：王親臣（CBDB 324372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324372&o=json
            external_identifier: CBDB:324372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.180Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gpZhUCK3rJGs9iXhZUaLig
        subject_person_id: p_TmfDTs3dgFgWzEaJva1cPF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王親臣，明人物。嘉靖三十八年進士，籍贯泰和。（中国历代人物传记资料库 CBDB 324372）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pexkZNKLpfGmd2w9kKi6XY
          claim_id: c_gpZhUCK3rJGs9iXhZUaLig
          source_id: s_23UewykmuD3GRe5tZEivSH
          stance: supports
          locator: CBDB:324372
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_kJmCNRigm1BkyULxYvdV8l
        subject_person_id: p_TmfDTs3dgFgWzEaJva1cPF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_me4wZDW82AptuX6cVAdTa3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kf1VsJKx8ahNF0iw7mlOKr
          claim_id: c_kJmCNRigm1BkyULxYvdV8l
          source_id: s_7LkcXKMDd9upGCRdBAoXCz
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第四十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7LkcXKMDd9upGCRdBAoXCz
            source_type: api_record
            title: 中国历代人物传记资料库：王育仁（CBDB 204809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204809&o=json
            external_identifier: CBDB:204809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.839Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_me4wZDW82AptuX6cVAdTa3
        status: active
        display_name: 王育仁
        merged_into_person_id: null
    - claim:
        id: c_mP0F72DDWtdemgIF-3iexx
        subject_person_id: p_TmfDTs3dgFgWzEaJva1cPF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yuJsD4Y8xBGzggDCT99o44
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wwssSCi-XS_f9X6VR6SRkt
          claim_id: c_mP0F72DDWtdemgIF-3iexx
          source_id: s_4qL5vshGJE48Mm_466EFdC
          stance: supports
          locator: CBDB：兄弟 王育仁（204809）之父／母 王親臣
          quotation: null
          interpretation_note: 由兄弟关系推断：王育德 与 王育仁 为同胞（CBDB 记「弟」），王育仁 之父／母即 王育德 之父／母。
          source:
            id: s_4qL5vshGJE48Mm_466EFdC
            source_type: api_record
            title: 中国历代人物传记资料库：王育德（CBDB 324376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324376&o=json
            external_identifier: CBDB:324376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yuJsD4Y8xBGzggDCT99o44
        status: active
        display_name: 王育德
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王親臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王親臣 | accepted |
| bio.summary | 王親臣，明人物。嘉靖三十八年進士，籍贯泰和。（中国历代人物传记资料库 CBDB 324372） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_me4wZDW82AptuX6cVAdTa3 | 王育仁 | accepted |
| children | p_yuJsD4Y8xBGzggDCT99o44 | 王育德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王親臣（CBDB 324372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324372&o=json)
- [中国历代人物传记资料库：王育德（CBDB 324376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324376&o=json)
- [中国历代人物传记资料库：王育仁（CBDB 204809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204809&o=json)
