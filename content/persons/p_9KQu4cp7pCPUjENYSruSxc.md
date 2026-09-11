---
schema: wang-person/v1
id: p_9KQu4cp7pCPUjENYSruSxc
status: active
merged_into: null
display_name: 王燮陶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WQMFp2EHDHjcQ5PJADAocr
        subject_person_id: p_9KQu4cp7pCPUjENYSruSxc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燮陶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jeNK1GhCxrF89LMm1CB4ZE
          claim_id: c_WQMFp2EHDHjcQ5PJADAocr
          source_id: s_FcrrGmS4kQRJHHGimkjtAL
          stance: supports
          locator: CBDB:693158
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（693158）
          source: &a1
            id: s_FcrrGmS4kQRJHHGimkjtAL
            source_type: api_record
            title: 中国历代人物传记资料库：王燮陶（CBDB 693158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693158&o=json
            external_identifier: CBDB:693158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.507Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f9EtwVztdfAoqKMchoKmFS
        subject_person_id: p_9KQu4cp7pCPUjENYSruSxc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燮陶，清人物。籍贯海鹽，身份为博學之人，入仕廩生。（中国历代人物传记资料库 CBDB 693158）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yWodkOpSaNcpxnjv_HGHzb
          claim_id: c_f9EtwVztdfAoqKMchoKmFS
          source_id: s_FcrrGmS4kQRJHHGimkjtAL
          stance: supports
          locator: CBDB:693158
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

# 王燮陶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王燮陶 | accepted |
| bio.summary | 王燮陶，清人物。籍贯海鹽，身份为博學之人，入仕廩生。（中国历代人物传记资料库 CBDB 693158） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王燮陶（CBDB 693158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693158&o=json)
