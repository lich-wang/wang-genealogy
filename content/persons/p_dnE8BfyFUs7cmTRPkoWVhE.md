---
schema: wang-person/v1
id: p_dnE8BfyFUs7cmTRPkoWVhE
status: active
merged_into: null
display_name: 王簡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nao8AiFMv48WFLcHuLPVCf
        subject_person_id: p_dnE8BfyFUs7cmTRPkoWVhE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王簡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t1HzZnbVBwvfVxXC77Ne8J
          claim_id: c_Nao8AiFMv48WFLcHuLPVCf
          source_id: s_mbU863MmtnGpcu3EtKaoGM
          stance: supports
          locator: CBDB:688189
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688189）
          source: &a1
            id: s_mbU863MmtnGpcu3EtKaoGM
            source_type: api_record
            title: 中国历代人物传记资料库：王簡（CBDB 688189）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688189&o=json
            external_identifier: CBDB:688189
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.493Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kvgpVoRkGsX9USKdnqjecP
        subject_person_id: p_dnE8BfyFUs7cmTRPkoWVhE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王簡，宋人物。籍贯仙居，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 688189）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8D0nJUmqX6lpBu619OEF5n
          claim_id: c_kvgpVoRkGsX9USKdnqjecP
          source_id: s_mbU863MmtnGpcu3EtKaoGM
          stance: supports
          locator: CBDB:688189
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

# 王簡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王簡 | accepted |
| bio.summary | 王簡，宋人物。籍贯仙居，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 688189） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王簡（CBDB 688189）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688189&o=json)
