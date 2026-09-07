---
schema: wang-person/v1
id: p_qzznHsDy1MaFH1YWPbYub4
status: active
merged_into: null
display_name: 王培龄
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZyBjvnD37jb5op9H6xxHuX
        subject_person_id: p_qzznHsDy1MaFH1YWPbYub4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王培龄（生于1506年），明人物。CBDB 记录其籍贯记录为鄉寧，入仕记录为科舉: 進士(籠統)。中国历代人物传记资料库（CBDB）以人物编号 202447 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_oiSPCKYXDWaiFF6M7Ad9kq
          claim_id: c_ZyBjvnD37jb5op9H6xxHuX
          source_id: s_qTrXfDWBFpFpZgrDZ9JGLL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_qTrXfDWBFpFpZgrDZ9JGLL
            source_type: api_record
            title: 维基数据：王培龄（Q45690317）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45690317
            external_identifier: Q45690317
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:50.150Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%9F%B9%E9%BD%A1
        - id: cs_V55noUCto-OGTE6SfVkZfj
          claim_id: c_ZyBjvnD37jb5op9H6xxHuX
          source_id: s_ts58X1Zaop75mBb14WiveM
          stance: supports
          locator: CBDB:202447
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ts58X1Zaop75mBb14WiveM
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王培齡（202447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202447&o=json
            external_identifier: CBDB:202447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:50.339Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HuzbSm9rVC5o6QqrPhxpST
        subject_person_id: p_qzznHsDy1MaFH1YWPbYub4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1506年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1506-01-01
            latest: 1506-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AFJPWgnrbXGkH4um8habwq
          claim_id: c_HuzbSm9rVC5o6QqrPhxpST
          source_id: s_qTrXfDWBFpFpZgrDZ9JGLL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_qTrXfDWBFpFpZgrDZ9JGLL
            source_type: api_record
            title: 维基数据：王培龄（Q45690317）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45690317
            external_identifier: Q45690317
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:50.150Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%9F%B9%E9%BD%A1
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YpM3dGy55KB5gbCFERwq4B
        subject_person_id: p_qzznHsDy1MaFH1YWPbYub4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王培龄
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZDKbAhRVnL5Lx7qj5HviTi
          claim_id: c_YpM3dGy55KB5gbCFERwq4B
          source_id: s_ts58X1Zaop75mBb14WiveM
          stance: supports
          locator: Q45690317
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_e5dUYJDN9tZ2ey9mym9zih
          claim_id: c_YpM3dGy55KB5gbCFERwq4B
          source_id: s_qTrXfDWBFpFpZgrDZ9JGLL
          stance: supports
          locator: Q45690317
          quotation: null
          interpretation_note: null
          source:
            id: s_qTrXfDWBFpFpZgrDZ9JGLL
            source_type: api_record
            title: 维基数据：王培龄（Q45690317）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45690317
            external_identifier: Q45690317
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:50.150Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%9F%B9%E9%BD%A1
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

# 王培龄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王培龄（生于1506年），明人物。CBDB 记录其籍贯记录为鄉寧，入仕记录为科舉: 進士(籠統)。中国历代人物传记资料库（CBDB）以人物编号 202447 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1506年 | accepted |
| name.primary | 王培龄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王培龄（Q45690317）](https://www.wikidata.org/wiki/Q45690317)
- [CBDB 中国历代人物传记资料库：王培齡（202447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202447&o=json)
