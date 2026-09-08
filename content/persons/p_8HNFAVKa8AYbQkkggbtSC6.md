---
schema: wang-person/v1
id: p_8HNFAVKa8AYbQkkggbtSC6
status: active
merged_into: null
display_name: 王厚
cbdb_id: 17819
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SP6ByHum6D27Ue8mLnpQPZ
        subject_person_id: p_8HNFAVKa8AYbQkkggbtSC6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王厚，宋人物。CBDB 记录其籍贯记录为德安，入仕记录为募入軍伍，曾任節度使、兩省。中国历代人物传记资料库（CBDB）以人物编号 17819 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_oxqz9nwffeMQcFNLkPHS8X
          claim_id: c_SP6ByHum6D27Ue8mLnpQPZ
          source_id: s_VDFSJUyL239Cxq3r4NHqVv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_VDFSJUyL239Cxq3r4NHqVv
            source_type: api_record
            title: 维基数据：王厚（Q16260160）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16260160
            external_identifier: Q16260160
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:55.754Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8E%9A
        - id: cs_ydyxdIFNgIXKXccch1FYAQ
          claim_id: c_SP6ByHum6D27Ue8mLnpQPZ
          source_id: s_A7g9L9wbW2dAoDu7qQBTfk
          stance: supports
          locator: CBDB:17819
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_A7g9L9wbW2dAoDu7qQBTfk
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王厚（17819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17819&o=json
            external_identifier: CBDB:17819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:55.927Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ypwLweP6QaJLgF5bWxBxCu
        subject_person_id: p_8HNFAVKa8AYbQkkggbtSC6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王厚
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Spg7FWxoKsJBbb3qktoCZC
          claim_id: c_ypwLweP6QaJLgF5bWxBxCu
          source_id: s_A7g9L9wbW2dAoDu7qQBTfk
          stance: supports
          locator: Q16260160
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_r6AqNfTLZ6F2zUMqD87p6k
          claim_id: c_ypwLweP6QaJLgF5bWxBxCu
          source_id: s_VDFSJUyL239Cxq3r4NHqVv
          stance: supports
          locator: Q16260160
          quotation: null
          interpretation_note: null
          source:
            id: s_VDFSJUyL239Cxq3r4NHqVv
            source_type: api_record
            title: 维基数据：王厚（Q16260160）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16260160
            external_identifier: Q16260160
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:55.754Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8E%9A
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uJprsUE7z79DoA6PoeJ3i1
        subject_person_id: p_5QEFg5NX8fdCTZoicRnKAT
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_8HNFAVKa8AYbQkkggbtSC6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MkrgrGKEC4LWSU2EZ8BQQ8
          claim_id: c_uJprsUE7z79DoA6PoeJ3i1
          source_id: s_AMCEA11HjgWEugGDaB86eR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_AMCEA11HjgWEugGDaB86eR
            source_type: api_record
            title: 维基数据：王韶（Q10417893）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10417893
            external_identifier: Q10417893
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:53.940Z
            metadata_json: null
        - id: cs_baew9D4fdGzD77dHxybFAx
          claim_id: c_uJprsUE7z79DoA6PoeJ3i1
          source_id: s_haQ49XjsJgPBddfbyHyvFp
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_haQ49XjsJgPBddfbyHyvFp
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王韶（1865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1865&o=json
            external_identifier: CBDB:1865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:28.099Z
            metadata_json: null
        - id: cs_jSP2DmEVMx5G3376ijdgA2
          claim_id: c_uJprsUE7z79DoA6PoeJ3i1
          source_id: s_VDFSJUyL239Cxq3r4NHqVv
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_VDFSJUyL239Cxq3r4NHqVv
            source_type: api_record
            title: 维基数据：王厚（Q16260160）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16260160
            external_identifier: Q16260160
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:55.754Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8E%9A
      object_person:
        id: p_5QEFg5NX8fdCTZoicRnKAT
        status: active
        display_name: 王韶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王厚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王厚，宋人物。CBDB 记录其籍贯记录为德安，入仕记录为募入軍伍，曾任節度使、兩省。中国历代人物传记资料库（CBDB）以人物编号 17819 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王厚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5QEFg5NX8fdCTZoicRnKAT | 王韶 | accepted |

## 外部来源

- [维基数据：王厚（Q16260160）](https://www.wikidata.org/wiki/Q16260160)
- [维基数据：王韶（Q10417893）](https://www.wikidata.org/wiki/Q10417893)
- [CBDB 中国历代人物传记资料库：王厚（17819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17819&o=json)
- [CBDB 中国历代人物传记资料库：王韶（1865）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1865&o=json)
