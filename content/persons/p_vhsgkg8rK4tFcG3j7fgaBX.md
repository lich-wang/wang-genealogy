---
schema: wang-person/v1
id: p_vhsgkg8rK4tFcG3j7fgaBX
status: active
merged_into: null
display_name: 長孫氏
revision: 1
cbdb_id: 140159
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HYn0NT_TU2vgVzTjyfEXJ9
        subject_person_id: p_vhsgkg8rK4tFcG3j7fgaBX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 長孫氏（648—701），周人物。籍贯河南。（中国历代人物传记资料库 CBDB 140159）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vJ__yPCDu7tpG7DOnHnuwH
          claim_id: c_HYn0NT_TU2vgVzTjyfEXJ9
          source_id: s_fZHk_5fjjUWQiJPW2tc1Lx
          stance: supports
          locator: CBDB:140159
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_fZHk_5fjjUWQiJPW2tc1Lx
            source_type: api_record
            title: 中国历代人物传记资料库：長孫氏(王美暢妻)（CBDB 140159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140159&o=json
            external_identifier: CBDB:140159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Icfq3J_EZciziN5Rh2GFrK
        subject_person_id: p_vhsgkg8rK4tFcG3j7fgaBX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 長孫氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T3fyqc6rXuraQSSDqgtpND
          claim_id: c_Icfq3J_EZciziN5Rh2GFrK
          source_id: s_fZHk_5fjjUWQiJPW2tc1Lx
          stance: supports
          locator: CBDB:140159
          quotation: null
          interpretation_note: CBDB 明确记录的王美暢配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_S0lKxSxEYUE6ioMFFse5DO
        subject_person_id: p_CWPBrhMiB4QhsDQzD22Bfc
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_vhsgkg8rK4tFcG3j7fgaBX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_piBDGy5WPAC1VlGgoIcMv_
          claim_id: c_S0lKxSxEYUE6ioMFFse5DO
          source_id: s_fZHk_5fjjUWQiJPW2tc1Lx
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changan 54：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CWPBrhMiB4QhsDQzD22Bfc
        status: active
        display_name: 王美暢
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 長孫氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 長孫氏（648—701），周人物。籍贯河南。（中国历代人物传记资料库 CBDB 140159） | accepted |
| name.primary | 長孫氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_CWPBrhMiB4QhsDQzD22Bfc | 王美暢 | accepted |

## 外部来源

- [中国历代人物传记资料库：長孫氏(王美暢妻)（CBDB 140159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140159&o=json)
