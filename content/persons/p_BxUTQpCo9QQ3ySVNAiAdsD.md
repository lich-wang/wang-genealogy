---
schema: wang-person/v1
id: p_BxUTQpCo9QQ3ySVNAiAdsD
status: active
merged_into: null
display_name: 王覺民
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4vnzNzJrAZdpV56LDG2f6F
        subject_person_id: p_BxUTQpCo9QQ3ySVNAiAdsD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王覺民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PHZbMUvVSgXRptgzn8M44z
          claim_id: c_4vnzNzJrAZdpV56LDG2f6F
          source_id: s_fPqdd8WYUj1Bs6HZcKKPSr
          stance: supports
          locator: CBDB:547566
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（547566）
          source: &a1
            id: s_fPqdd8WYUj1Bs6HZcKKPSr
            source_type: api_record
            title: 中国历代人物传记资料库：王覺民（CBDB 547566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=547566&o=json
            external_identifier: CBDB:547566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.539Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jv1YaYLNtLMf2ACSnzfTtk
        subject_person_id: p_BxUTQpCo9QQ3ySVNAiAdsD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王覺民，宋人物。籍贯嚴州，入仕進士。（中国历代人物传记资料库 CBDB 547566）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XRNiTBg1IbpTT4JR9nUQM4
          claim_id: c_jv1YaYLNtLMf2ACSnzfTtk
          source_id: s_fPqdd8WYUj1Bs6HZcKKPSr
          stance: supports
          locator: CBDB:547566
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

# 王覺民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王覺民 | accepted |
| bio.summary | 王覺民，宋人物。籍贯嚴州，入仕進士。（中国历代人物传记资料库 CBDB 547566） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王覺民（CBDB 547566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=547566&o=json)
