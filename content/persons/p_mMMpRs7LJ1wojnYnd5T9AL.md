---
schema: wang-person/v1
id: p_mMMpRs7LJ1wojnYnd5T9AL
status: active
merged_into: null
display_name: 王惟謙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3MgKao47NXcE1yGjjPCVgR
        subject_person_id: p_mMMpRs7LJ1wojnYnd5T9AL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DnPhect26hnnWWEeqjeQUG
          claim_id: c_3MgKao47NXcE1yGjjPCVgR
          source_id: s_PZuHAuA81MH1SejLyK7EBt
          stance: supports
          locator: CBDB:637891
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637891）
          source: &a1
            id: s_PZuHAuA81MH1SejLyK7EBt
            source_type: api_record
            title: 中国历代人物传记资料库：王惟謙（CBDB 637891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637891&o=json
            external_identifier: CBDB:637891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.448Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JQ7FkDxbKsqcyBsm5HZjAF
        subject_person_id: p_mMMpRs7LJ1wojnYnd5T9AL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王惟謙，清人物。籍贯松江府，入仕貢生: 拔貢，曾任教諭、復設訓導。（中国历代人物传记资料库 CBDB 637891）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5wQ8qP5kVyVe5_2YZ_CvZE
          claim_id: c_JQ7FkDxbKsqcyBsm5HZjAF
          source_id: s_PZuHAuA81MH1SejLyK7EBt
          stance: supports
          locator: CBDB:637891
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

# 王惟謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟謙 | accepted |
| bio.summary | 王惟謙，清人物。籍贯松江府，入仕貢生: 拔貢，曾任教諭、復設訓導。（中国历代人物传记资料库 CBDB 637891） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惟謙（CBDB 637891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637891&o=json)
