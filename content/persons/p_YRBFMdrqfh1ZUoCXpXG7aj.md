---
schema: wang-person/v1
id: p_YRBFMdrqfh1ZUoCXpXG7aj
status: active
merged_into: null
display_name: 王涣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wgzz5oku81ncFnRA9R89uW
        subject_person_id: p_YRBFMdrqfh1ZUoCXpXG7aj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王涣
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_frXRoHfkCpd439JWbbzbMe
          claim_id: c_wgzz5oku81ncFnRA9R89uW
          source_id: s_Tm33uGYq1Uaq1FmM5akk4j
          stance: supports
          locator: CBDB:549709
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（549709）
          source: &a1
            id: s_Tm33uGYq1Uaq1FmM5akk4j
            source_type: api_record
            title: 中国历代人物传记资料库：王涣（CBDB 549709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=549709&o=json
            external_identifier: CBDB:549709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.559Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_chNjpAMP8HoQxAneEGa1Zr
        subject_person_id: p_YRBFMdrqfh1ZUoCXpXG7aj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王涣，宋人物。籍贯眉州，入仕進士。（中国历代人物传记资料库 CBDB 549709）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_faWtFMv8z-7vWsmPANmAU8
          claim_id: c_chNjpAMP8HoQxAneEGa1Zr
          source_id: s_Tm33uGYq1Uaq1FmM5akk4j
          stance: supports
          locator: CBDB:549709
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

# 王涣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王涣 | accepted |
| bio.summary | 王涣，宋人物。籍贯眉州，入仕進士。（中国历代人物传记资料库 CBDB 549709） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王涣（CBDB 549709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=549709&o=json)
