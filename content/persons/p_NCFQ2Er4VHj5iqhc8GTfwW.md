---
schema: wang-person/v1
id: p_NCFQ2Er4VHj5iqhc8GTfwW
status: active
merged_into: null
display_name: 王業懋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Sp7wXe3RYMWvFGMnYM4Rp1
        subject_person_id: p_NCFQ2Er4VHj5iqhc8GTfwW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王業懋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vMp2dNUzLmayCTPQM4D8hm
          claim_id: c_Sp7wXe3RYMWvFGMnYM4Rp1
          source_id: s_LFd3kUASEhaEUKvS8RX3cR
          stance: supports
          locator: CBDB:638771
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638771）
          source: &a1
            id: s_LFd3kUASEhaEUKvS8RX3cR
            source_type: api_record
            title: 中国历代人物传记资料库：王業懋（CBDB 638771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638771&o=json
            external_identifier: CBDB:638771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.766Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QVZW7oNeDYEhSQH8Wim5rQ
        subject_person_id: p_NCFQ2Er4VHj5iqhc8GTfwW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王業懋，清人物。籍贯開封府，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 638771）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jyoDTXsDxMWDAVWIm3bhld
          claim_id: c_QVZW7oNeDYEhSQH8Wim5rQ
          source_id: s_LFd3kUASEhaEUKvS8RX3cR
          stance: supports
          locator: CBDB:638771
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

# 王業懋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王業懋 | accepted |
| bio.summary | 王業懋，清人物。籍贯開封府，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 638771） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王業懋（CBDB 638771）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638771&o=json)
