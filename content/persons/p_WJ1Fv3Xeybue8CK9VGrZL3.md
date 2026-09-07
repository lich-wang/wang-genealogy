---
schema: wang-person/v1
id: p_WJ1Fv3Xeybue8CK9VGrZL3
status: active
merged_into: null
display_name: 王安国
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yMc5fIA4ajQ5wGnZTsDgr6
        subject_person_id: p_WJ1Fv3Xeybue8CK9VGrZL3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安国（1694年—1757年），史料所见人物。本项目依据《中央纪委监察部网站：江苏高邮王念孙、王引之父子》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1xOB-_xlA0av5W9uh59eM9
          claim_id: c_yMc5fIA4ajQ5wGnZTsDgr6
          source_id: s_1N4VHzGnSCazYyxcFVye5N
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_1N4VHzGnSCazYyxcFVye5N
            source_type: website
            title: 中央纪委监察部网站：江苏高邮王念孙、王引之父子
            creator: null
            publisher: 中央纪委监察部网站
            published_at_text: null
            canonical_url: https://m.ccdi.gov.cn/content/7c/1a/11289.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:05:55.243Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EzS8QFTtXGLG3XP2BvDLru
        subject_person_id: p_WJ1Fv3Xeybue8CK9VGrZL3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1694年
            calendar_note: null
            earliest: 1694-01-01
            latest: 1694-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YdqeTYKJ8mjFw78QWATAWm
          claim_id: c_EzS8QFTtXGLG3XP2BvDLru
          source_id: s_1N4VHzGnSCazYyxcFVye5N
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Q9wF1FSzf5N4nB2S3HNzMY
        subject_person_id: p_WJ1Fv3Xeybue8CK9VGrZL3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1757年
            calendar_note: null
            earliest: 1757-01-01
            latest: 1757-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rokiNaA1BzLGGqvpq56rEs
          claim_id: c_Q9wF1FSzf5N4nB2S3HNzMY
          source_id: s_1N4VHzGnSCazYyxcFVye5N
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_1N4VHzGnSCazYyxcFVye5N
            source_type: website
            title: 中央纪委监察部网站：江苏高邮王念孙、王引之父子
            creator: null
            publisher: 中央纪委监察部网站
            published_at_text: null
            canonical_url: https://m.ccdi.gov.cn/content/7c/1a/11289.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:05:55.243Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jG2aB4KYZxDzYH3ViKL7sM
        subject_person_id: p_WJ1Fv3Xeybue8CK9VGrZL3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安国
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_p8TwMUUyZMSw7nm3QRCpi6
          claim_id: c_jG2aB4KYZxDzYH3ViKL7sM
          source_id: s_1N4VHzGnSCazYyxcFVye5N
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source:
            id: s_1N4VHzGnSCazYyxcFVye5N
            source_type: website
            title: 中央纪委监察部网站：江苏高邮王念孙、王引之父子
            creator: null
            publisher: 中央纪委监察部网站
            published_at_text: null
            canonical_url: https://m.ccdi.gov.cn/content/7c/1a/11289.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:05:55.243Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Y1q166CRRsBNWNEzNqBEiS
        subject_person_id: p_trg4cuM1tnD5GLsUnLoU3f
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_WJ1Fv3Xeybue8CK9VGrZL3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xSU4E28xB7h48huvjSKs83
          claim_id: c_Y1q166CRRsBNWNEzNqBEiS
          source_id: s_1N4VHzGnSCazYyxcFVye5N
          stance: supports
          locator: 王氏家学渊源
          quotation: 王安国任左都御史兼领广东巡抚时，其父王曾禄叮嘱他。
          interpretation_note: null
          source:
            id: s_1N4VHzGnSCazYyxcFVye5N
            source_type: website
            title: 中央纪委监察部网站：江苏高邮王念孙、王引之父子
            creator: null
            publisher: 中央纪委监察部网站
            published_at_text: null
            canonical_url: https://m.ccdi.gov.cn/content/7c/1a/11289.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:05:55.243Z
            metadata_json: null
      object_person:
        id: p_trg4cuM1tnD5GLsUnLoU3f
        status: active
        display_name: 王曾禄
        merged_into_person_id: null
  children:
    - claim:
        id: c_enzhoP4bguTuSjqMXCrrZC
        subject_person_id: p_WJ1Fv3Xeybue8CK9VGrZL3
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_ufBkxfH59gVHhCXsfm99um
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nQJMZoSDmWBNzco5o73i9W
          claim_id: c_enzhoP4bguTuSjqMXCrrZC
          source_id: s_1N4VHzGnSCazYyxcFVye5N
          stance: supports
          locator: 王氏家学渊源
          quotation: 王念孙父亲王安国（1694-1757）。
          interpretation_note: null
          source:
            id: s_1N4VHzGnSCazYyxcFVye5N
            source_type: website
            title: 中央纪委监察部网站：江苏高邮王念孙、王引之父子
            creator: null
            publisher: 中央纪委监察部网站
            published_at_text: null
            canonical_url: https://m.ccdi.gov.cn/content/7c/1a/11289.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:05:55.243Z
            metadata_json: null
      object_person:
        id: p_ufBkxfH59gVHhCXsfm99um
        status: active
        display_name: 王念孙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王安国

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王安国（1694年—1757年），史料所见人物。本项目依据《中央纪委监察部网站：江苏高邮王念孙、王引之父子》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1694年 | accepted |
| death.date | 1757年 | accepted |
| name.primary | 王安国 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_trg4cuM1tnD5GLsUnLoU3f | 王曾禄 | accepted |
| children | p_ufBkxfH59gVHhCXsfm99um | 王念孙 | accepted |

## 外部来源

- [中央纪委监察部网站：江苏高邮王念孙、王引之父子](https://m.ccdi.gov.cn/content/7c/1a/11289.html)
