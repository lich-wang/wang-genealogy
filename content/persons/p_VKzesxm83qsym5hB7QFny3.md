---
schema: wang-person/v1
id: p_VKzesxm83qsym5hB7QFny3
status: active
merged_into: null
display_name: 王振家
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uMTJpdGXECtJyXsFwWsNee
        subject_person_id: p_VKzesxm83qsym5hB7QFny3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振家
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kNiCRi19H2rpSLh2SvrUbZ
          claim_id: c_uMTJpdGXECtJyXsFwWsNee
          source_id: s_eNtwU5jPrJHjf41CnThYLH
          stance: supports
          locator: CBDB:638122
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638122）
          source: &a1
            id: s_eNtwU5jPrJHjf41CnThYLH
            source_type: api_record
            title: 中国历代人物传记资料库：王振家（CBDB 638122）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638122&o=json
            external_identifier: CBDB:638122
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.533Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Yuom4n6u56ApD5XhvkccSq
        subject_person_id: p_VKzesxm83qsym5hB7QFny3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振家，清人物。籍贯靈石，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638122）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0TzWEuJwnQZ-ls_KrNKbad
          claim_id: c_Yuom4n6u56ApD5XhvkccSq
          source_id: s_eNtwU5jPrJHjf41CnThYLH
          stance: supports
          locator: CBDB:638122
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王振家

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王振家 | accepted |
| bio.summary | 王振家，清人物。籍贯靈石，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638122） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王振家（CBDB 638122）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638122&o=json)
