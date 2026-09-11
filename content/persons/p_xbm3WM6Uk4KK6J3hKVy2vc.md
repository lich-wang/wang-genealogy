---
schema: wang-person/v1
id: p_xbm3WM6Uk4KK6J3hKVy2vc
status: active
merged_into: null
display_name: 王星漢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2jc2FPYyu7nr2ouRauWD18
        subject_person_id: p_xbm3WM6Uk4KK6J3hKVy2vc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王星漢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FA8EuEFdCVQVp2tk6bhRmT
          claim_id: c_2jc2FPYyu7nr2ouRauWD18
          source_id: s_f6tVMviSH6K88j3N7ANRe5
          stance: supports
          locator: CBDB:638401
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638401）
          source: &a1
            id: s_f6tVMviSH6K88j3N7ANRe5
            source_type: api_record
            title: 中国历代人物传记资料库：王星漢（CBDB 638401）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638401&o=json
            external_identifier: CBDB:638401
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.618Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6K5XVNXSt9dDXzLCM4KTcx
        subject_person_id: p_xbm3WM6Uk4KK6J3hKVy2vc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王星漢，清人物。籍贯同州府，入仕貢生: 拔貢，曾任教授、復設教諭。（中国历代人物传记资料库 CBDB 638401）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PwafzoeS5gE8UA3CcqKh9y
          claim_id: c_6K5XVNXSt9dDXzLCM4KTcx
          source_id: s_f6tVMviSH6K88j3N7ANRe5
          stance: supports
          locator: CBDB:638401
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

# 王星漢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王星漢 | accepted |
| bio.summary | 王星漢，清人物。籍贯同州府，入仕貢生: 拔貢，曾任教授、復設教諭。（中国历代人物传记资料库 CBDB 638401） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王星漢（CBDB 638401）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638401&o=json)
