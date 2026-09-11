---
schema: wang-person/v1
id: p_rZc2qEJdizKjfm6aY4AiLt
status: active
merged_into: null
display_name: 王說
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KAkHthWJ9JT5VVE82QpRK1
        subject_person_id: p_rZc2qEJdizKjfm6aY4AiLt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王說
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pBwdzMKvwVzwa1EXM32AGU
          claim_id: c_KAkHthWJ9JT5VVE82QpRK1
          source_id: s_61utLnCZSPkp4e64CRFKuH
          stance: supports
          locator: CBDB:1933
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1933）
          source: &a1
            id: s_61utLnCZSPkp4e64CRFKuH
            source_type: api_record
            title: 中国历代人物传记资料库：王說（CBDB 1933）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1933&o=json
            external_identifier: CBDB:1933
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.411Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LpAbmvVoQLgDt8L7AQnQXY
        subject_person_id: p_rZc2qEJdizKjfm6aY4AiLt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1028年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pKQFbHgSk2iUnePHwpq5Cz
          claim_id: c_LpAbmvVoQLgDt8L7AQnQXY
          source_id: s_61utLnCZSPkp4e64CRFKuH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_VGCZshNKmHAbULn7t2swHH
        subject_person_id: p_rZc2qEJdizKjfm6aY4AiLt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1101年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D4sdq6EuAZsHKjq9Qth2Ha
          claim_id: c_VGCZshNKmHAbULn7t2swHH
          source_id: s_61utLnCZSPkp4e64CRFKuH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fPKzVPKw5Zy2BjFwJ9tZYy
        subject_person_id: p_rZc2qEJdizKjfm6aY4AiLt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王說（1028年—1101年），宋人物。籍贯洛陽，入仕進士，曾任朝議大夫、中大夫、左中散大夫。（中国历代人物传记资料库 CBDB 1933）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KHPESLWUGm05PjGZ-9NoL-
          claim_id: c_fPKzVPKw5Zy2BjFwJ9tZYy
          source_id: s_61utLnCZSPkp4e64CRFKuH
          stance: supports
          locator: CBDB:1933
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NUXT46MN0kZDlCLLP13191
        subject_person_id: p_6qFqzHC21Z9f8VhXAcZ1P4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rZc2qEJdizKjfm6aY4AiLt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PZ5p5vrQSec11BvyLuD3oy
          claim_id: c_NUXT46MN0kZDlCLLP13191
          source_id: s_61utLnCZSPkp4e64CRFKuH
          stance: supports
          locator: CBDB 双向互证（父 王舉正 ⇄ 子 王說）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_6qFqzHC21Z9f8VhXAcZ1P4
        status: active
        display_name: 王舉正
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王說

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王說 | accepted |
| birth.date | 1028年 | accepted |
| death.date | 1101年 | accepted |
| bio.summary | 王說（1028年—1101年），宋人物。籍贯洛陽，入仕進士，曾任朝議大夫、中大夫、左中散大夫。（中国历代人物传记资料库 CBDB 1933） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6qFqzHC21Z9f8VhXAcZ1P4 | 王舉正 | accepted |

## 外部来源

- [中国历代人物传记资料库：王說（CBDB 1933）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1933&o=json)
