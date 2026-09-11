---
schema: wang-person/v1
id: p_pkFd6ouTLWnvNurqBHPMi6
status: active
merged_into: null
display_name: 王栖曜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jtYDHpackGNpBFbzmJZD7g
        subject_person_id: p_pkFd6ouTLWnvNurqBHPMi6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王栖曜
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zfDSoARznYt91KRQtmY6Hr
          claim_id: c_jtYDHpackGNpBFbzmJZD7g
          source_id: s_RuQy9AE1Y1C9UsDWfAj1Gk
          stance: supports
          locator: CBDB:377775
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（377775）
          source: &a1
            id: s_RuQy9AE1Y1C9UsDWfAj1Gk
            source_type: api_record
            title: 中国历代人物传记资料库：王栖曜（CBDB 377775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377775&o=json
            external_identifier: CBDB:377775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.638Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UdvktvjmT3f4RDSBvThafE
        subject_person_id: p_pkFd6ouTLWnvNurqBHPMi6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王栖曜，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 377775）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JkEUI_WezZC-_96VdtkZyg
          claim_id: c_UdvktvjmT3f4RDSBvThafE
          source_id: s_RuQy9AE1Y1C9UsDWfAj1Gk
          stance: supports
          locator: CBDB:377775
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

# 王栖曜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王栖曜 | accepted |
| bio.summary | 王栖曜，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 377775） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王栖曜（CBDB 377775）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377775&o=json)
