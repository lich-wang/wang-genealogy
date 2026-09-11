---
schema: wang-person/v1
id: p_GhovZGX2RaABRt7h2GGkqC
status: active
merged_into: null
display_name: 王遐齡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BDLH7Ypn6Yzpn7qP4Hzo7C
        subject_person_id: p_GhovZGX2RaABRt7h2GGkqC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遐齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r7bCfytf9FEhFMs3xN1i58
          claim_id: c_BDLH7Ypn6Yzpn7qP4Hzo7C
          source_id: s_Dkjf4RxZ772Pj7YzRLizpo
          stance: supports
          locator: CBDB:640448
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640448）
          source: &a1
            id: s_Dkjf4RxZ772Pj7YzRLizpo
            source_type: api_record
            title: 中国历代人物传记资料库：王遐齡（CBDB 640448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640448&o=json
            external_identifier: CBDB:640448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.101Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bu72wqsk1bPUAvXgdZxani
        subject_person_id: p_GhovZGX2RaABRt7h2GGkqC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遐齡，清人物。籍贯慈溪，入仕監生，曾任通判。（中国历代人物传记资料库 CBDB 640448）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ViVKqsQHzJv3e_-arbZF1O
          claim_id: c_bu72wqsk1bPUAvXgdZxani
          source_id: s_Dkjf4RxZ772Pj7YzRLizpo
          stance: supports
          locator: CBDB:640448
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

# 王遐齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遐齡 | accepted |
| bio.summary | 王遐齡，清人物。籍贯慈溪，入仕監生，曾任通判。（中国历代人物传记资料库 CBDB 640448） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遐齡（CBDB 640448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640448&o=json)
