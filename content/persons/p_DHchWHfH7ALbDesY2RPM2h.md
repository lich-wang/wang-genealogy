---
schema: wang-person/v1
id: p_DHchWHfH7ALbDesY2RPM2h
status: active
merged_into: null
display_name: 王得雄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QD6mrAHra5W3dMMsCyJpeG
        subject_person_id: p_DHchWHfH7ALbDesY2RPM2h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得雄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9u8ytChdAU7yC2A3CC99sR
          claim_id: c_QD6mrAHra5W3dMMsCyJpeG
          source_id: s_TMkdxWKSf3JhtdpQrBD4qU
          stance: supports
          locator: CBDB:637653
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637653）
          source: &a1
            id: s_TMkdxWKSf3JhtdpQrBD4qU
            source_type: api_record
            title: 中国历代人物传记资料库：王得雄（CBDB 637653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637653&o=json
            external_identifier: CBDB:637653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SJDvbjt1eTC2gxzJcCoG3A
        subject_person_id: p_DHchWHfH7ALbDesY2RPM2h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得雄，清人物。籍贯順天府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 637653）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0-aq62fl8KElN5xZWYp2xo
          claim_id: c_SJDvbjt1eTC2gxzJcCoG3A
          source_id: s_TMkdxWKSf3JhtdpQrBD4qU
          stance: supports
          locator: CBDB:637653
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

# 王得雄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王得雄 | accepted |
| bio.summary | 王得雄，清人物。籍贯順天府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 637653） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王得雄（CBDB 637653）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637653&o=json)
