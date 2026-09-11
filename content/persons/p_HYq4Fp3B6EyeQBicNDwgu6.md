---
schema: wang-person/v1
id: p_HYq4Fp3B6EyeQBicNDwgu6
status: active
merged_into: null
display_name: 王珗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3HE1Mbm1RA4FQBYKYookUb
        subject_person_id: p_HYq4Fp3B6EyeQBicNDwgu6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RDYmVxN76Zs14hQwadmCAM
          claim_id: c_3HE1Mbm1RA4FQBYKYookUb
          source_id: s_GqYoyU9EzJHfXCVCSSr4sp
          stance: supports
          locator: CBDB:378158
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（378158）
          source: &a1
            id: s_GqYoyU9EzJHfXCVCSSr4sp
            source_type: api_record
            title: 中国历代人物传记资料库：王珗（CBDB 378158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=378158&o=json
            external_identifier: CBDB:378158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.649Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LSoQAMVmWFa7pbpWqPFbQf
        subject_person_id: p_HYq4Fp3B6EyeQBicNDwgu6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珗，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 378158）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TKQtyyVGMkor7qtPdSPeR-
          claim_id: c_LSoQAMVmWFa7pbpWqPFbQf
          source_id: s_GqYoyU9EzJHfXCVCSSr4sp
          stance: supports
          locator: CBDB:378158
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

# 王珗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珗 | accepted |
| bio.summary | 王珗，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 378158） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珗（CBDB 378158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=378158&o=json)
