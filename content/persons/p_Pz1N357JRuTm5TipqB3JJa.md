---
schema: wang-person/v1
id: p_Pz1N357JRuTm5TipqB3JJa
status: active
merged_into: null
display_name: 王顯紹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ukUJ1Q3oc7jdgpwgeFc9vc
        subject_person_id: p_Pz1N357JRuTm5TipqB3JJa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯紹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_31aHPEQ4tfVw7zF3QJ99Tt
          claim_id: c_ukUJ1Q3oc7jdgpwgeFc9vc
          source_id: s_p1pu9juaHjEXYGhdEG2Eo2
          stance: supports
          locator: CBDB:638435
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638435）
          source: &a1
            id: s_p1pu9juaHjEXYGhdEG2Eo2
            source_type: api_record
            title: 中国历代人物传记资料库：王顯紹（CBDB 638435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638435&o=json
            external_identifier: CBDB:638435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.630Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LFTMJBjNGEXSfwjF7462QC
        subject_person_id: p_Pz1N357JRuTm5TipqB3JJa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯紹，清人物。籍贯山陰，曾任典史。（中国历代人物传记资料库 CBDB 638435）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FuiIZgOX_Vsf4cDA2cZbZw
          claim_id: c_LFTMJBjNGEXSfwjF7462QC
          source_id: s_p1pu9juaHjEXYGhdEG2Eo2
          stance: supports
          locator: CBDB:638435
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

# 王顯紹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顯紹 | accepted |
| bio.summary | 王顯紹，清人物。籍贯山陰，曾任典史。（中国历代人物传记资料库 CBDB 638435） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王顯紹（CBDB 638435）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638435&o=json)
