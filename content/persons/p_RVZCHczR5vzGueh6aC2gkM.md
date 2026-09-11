---
schema: wang-person/v1
id: p_RVZCHczR5vzGueh6aC2gkM
status: active
merged_into: null
display_name: 王宗古
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n916qaiQ8oN8scr4VGzpDK
        subject_person_id: p_RVZCHczR5vzGueh6aC2gkM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗古
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AUgAyCtWr2BPPZZVUtMzWc
          claim_id: c_n916qaiQ8oN8scr4VGzpDK
          source_id: s_Fq3C4CA1E4qsAjmjq2iwb7
          stance: supports
          locator: CBDB:27075
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（27075）
          source: &a1
            id: s_Fq3C4CA1E4qsAjmjq2iwb7
            source_type: api_record
            title: 中国历代人物传记资料库：王宗古（CBDB 27075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27075&o=json
            external_identifier: CBDB:27075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.952Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g3FRF2i8qXa2Hqb4Mabb8W
        subject_person_id: p_RVZCHczR5vzGueh6aC2gkM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗古，宋人物。籍贯長社。（中国历代人物传记资料库 CBDB 27075）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z00I5CNTVpiPmBG4DgVLZ_
          claim_id: c_g3FRF2i8qXa2Hqb4Mabb8W
          source_id: s_Fq3C4CA1E4qsAjmjq2iwb7
          stance: supports
          locator: CBDB:27075
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

# 王宗古

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗古 | accepted |
| bio.summary | 王宗古，宋人物。籍贯長社。（中国历代人物传记资料库 CBDB 27075） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗古（CBDB 27075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27075&o=json)
