---
schema: wang-person/v1
id: p_3kCgZeVuvZ2BjS2o8M9UxN
status: active
merged_into: null
display_name: 王得
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s8JXGdQ2cHEC2ig2Ab2VYU
        subject_person_id: p_3kCgZeVuvZ2BjS2o8M9UxN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zHxBhr1NPw5JoQY7YyuhD3
          claim_id: c_s8JXGdQ2cHEC2ig2Ab2VYU
          source_id: s_ZJC85z2W4p6LCYBq67GeB1
          stance: supports
          locator: CBDB:244044
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244044）
          source: &a1
            id: s_ZJC85z2W4p6LCYBq67GeB1
            source_type: api_record
            title: 中国历代人物传记资料库：王得（CBDB 244044）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244044&o=json
            external_identifier: CBDB:244044
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.012Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jtjuc8reyGzHkAJXnaAt4Q
        subject_person_id: p_3kCgZeVuvZ2BjS2o8M9UxN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得，明人物。成化五年進士，曾任醫學訓科。（中国历代人物传记资料库 CBDB 244044）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Bj1Gd1Nzo06PqKmywqpYdu
          claim_id: c_Jtjuc8reyGzHkAJXnaAt4Q
          source_id: s_ZJC85z2W4p6LCYBq67GeB1
          stance: supports
          locator: CBDB:244044
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
  descendants:
    - claim:
        id: c_inkTNKRHAlxmc0LkXuekha
        subject_person_id: p_3kCgZeVuvZ2BjS2o8M9UxN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_v5g4H2q2EXrnEQmwfqdSHb
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZLgMI2M6bSgfQ6RvzxOg4G
          claim_id: c_inkTNKRHAlxmc0LkXuekha
          source_id: s_ZJC85z2W4p6LCYBq67GeB1
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第六十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_v5g4H2q2EXrnEQmwfqdSHb
        status: active
        display_name: 王溥
        merged_into_person_id: null
  other: []
---

# 王得

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王得 | accepted |
| bio.summary | 王得，明人物。成化五年進士，曾任醫學訓科。（中国历代人物传记资料库 CBDB 244044） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_v5g4H2q2EXrnEQmwfqdSHb | 王溥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王得（CBDB 244044）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244044&o=json)
