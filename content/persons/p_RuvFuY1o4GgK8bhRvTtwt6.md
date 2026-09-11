---
schema: wang-person/v1
id: p_RuvFuY1o4GgK8bhRvTtwt6
status: active
merged_into: null
display_name: 王毓文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3uVFBJU1cGN5CkM2tgn4rL
        subject_person_id: p_RuvFuY1o4GgK8bhRvTtwt6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毓文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uFzNV9D6H6GPM3N4DQhDK2
          claim_id: c_3uVFBJU1cGN5CkM2tgn4rL
          source_id: s_nQnSV8kNoo8EEFtakj5G12
          stance: supports
          locator: CBDB:638948
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638948）
          source: &a1
            id: s_nQnSV8kNoo8EEFtakj5G12
            source_type: api_record
            title: 中国历代人物传记资料库：王毓文（CBDB 638948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638948&o=json
            external_identifier: CBDB:638948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.793Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wvZcYdcToihxqj5wkgTyuA
        subject_person_id: p_RuvFuY1o4GgK8bhRvTtwt6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王毓文，清人物。籍贯歷城，入仕貢生: 副貢，曾任知縣。（中国历代人物传记资料库 CBDB 638948）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1kWtGe7Z8BGhLkJmTdzWon
          claim_id: c_wvZcYdcToihxqj5wkgTyuA
          source_id: s_nQnSV8kNoo8EEFtakj5G12
          stance: supports
          locator: CBDB:638948
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

# 王毓文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王毓文 | accepted |
| bio.summary | 王毓文，清人物。籍贯歷城，入仕貢生: 副貢，曾任知縣。（中国历代人物传记资料库 CBDB 638948） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王毓文（CBDB 638948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638948&o=json)
