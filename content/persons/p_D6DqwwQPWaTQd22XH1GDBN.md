---
schema: wang-person/v1
id: p_D6DqwwQPWaTQd22XH1GDBN
status: active
merged_into: null
display_name: 王震龍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G1Lm4TZMaADda5K8DoDWrH
        subject_person_id: p_D6DqwwQPWaTQd22XH1GDBN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JgiBFpqrMS5eV2SW2fDgNP
          claim_id: c_G1Lm4TZMaADda5K8DoDWrH
          source_id: s_a34xWAhCMJ2zhfoNan1JNP
          stance: supports
          locator: CBDB:538740
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（538740）
          source: &a1
            id: s_a34xWAhCMJ2zhfoNan1JNP
            source_type: api_record
            title: 中国历代人物传记资料库：王震龍（CBDB 538740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=538740&o=json
            external_identifier: CBDB:538740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.428Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y752aEbs8PqKGnFS9NLne1
        subject_person_id: p_D6DqwwQPWaTQd22XH1GDBN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震龍，宋人物。籍贯福州，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 538740）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q4-9El4M8rxXladI1rHv_q
          claim_id: c_Y752aEbs8PqKGnFS9NLne1
          source_id: s_a34xWAhCMJ2zhfoNan1JNP
          stance: supports
          locator: CBDB:538740
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

# 王震龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王震龍 | accepted |
| bio.summary | 王震龍，宋人物。籍贯福州，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 538740） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王震龍（CBDB 538740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=538740&o=json)
