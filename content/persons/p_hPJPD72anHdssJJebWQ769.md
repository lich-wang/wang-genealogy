---
schema: wang-person/v1
id: p_hPJPD72anHdssJJebWQ769
status: active
merged_into: null
display_name: 曹氏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_OWlpYkMrPI9gmxqYfu7F9k
        subject_person_id: p_hPJPD72anHdssJJebWQ769
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 曹氏，明人物。中国历代人物传记资料库（CBDB）以人物编号 338009 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CsfLRPxVXMv3N113v-Qj1A
          claim_id: c_OWlpYkMrPI9gmxqYfu7F9k
          source_id: s_NF9gbpTmGsbbZBoXvMnjDg
          stance: supports
          locator: CBDB:338009
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_NF9gbpTmGsbbZBoXvMnjDg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：曹氏（338009）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338009&o=json
            external_identifier: CBDB:338009
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:55.496Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ea8pjSRvZY7BE1sZT4JVUv
        subject_person_id: p_hPJPD72anHdssJJebWQ769
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 曹氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_S4J7NFBN84cXnJF1ZvzpnQ
          claim_id: c_Ea8pjSRvZY7BE1sZT4JVUv
          source_id: s_NF9gbpTmGsbbZBoXvMnjDg
          stance: supports
          locator: Q65865711
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_hF2UHJCAxcazwi9xQvJkcL
          claim_id: c_Ea8pjSRvZY7BE1sZT4JVUv
          source_id: s_ij8tm52HrnxALnn8HHWq3T
          stance: supports
          locator: Q65865711
          quotation: null
          interpretation_note: null
          source:
            id: s_ij8tm52HrnxALnn8HHWq3T
            source_type: api_record
            title: 维基数据：曹氏（Q65865711）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65865711
            external_identifier: Q65865711
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:55.359Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_AFCBe4q2R9GogZqtCrcJjV
        subject_person_id: p_ARknwHLDtDNeZVf48qiF3F
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_hPJPD72anHdssJJebWQ769
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LVnPdDVhEJ3AVqxGSHd8qf
          claim_id: c_AFCBe4q2R9GogZqtCrcJjV
          source_id: s_cbBNC69nJo7iA6xbFpqp97
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_cbBNC69nJo7iA6xbFpqp97
            source_type: api_record
            title: 维基数据：王诏（Q15928211）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15928211
            external_identifier: Q15928211
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:33.776Z
            metadata_json: null
        - id: cs_ciri566y1SLX8HGwsYroPn
          claim_id: c_AFCBe4q2R9GogZqtCrcJjV
          source_id: s_8YsYgW69KkcMNHQDs4eAPm
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：天順八年進士登科錄:一卷
          source:
            id: s_8YsYgW69KkcMNHQDs4eAPm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王詔（67938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67938&o=json
            external_identifier: CBDB:67938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:40.308Z
            metadata_json: null
        - id: cs_sbqm7CcDAgsoHQ6ZN5qRKC
          claim_id: c_AFCBe4q2R9GogZqtCrcJjV
          source_id: s_ij8tm52HrnxALnn8HHWq3T
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_ij8tm52HrnxALnn8HHWq3T
            source_type: api_record
            title: 维基数据：曹氏（Q65865711）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65865711
            external_identifier: Q65865711
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:55.359Z
            metadata_json: null
      object_person:
        id: p_ARknwHLDtDNeZVf48qiF3F
        status: active
        display_name: 王诏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 曹氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 曹氏，明人物。中国历代人物传记资料库（CBDB）以人物编号 338009 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 曹氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ARknwHLDtDNeZVf48qiF3F | 王诏 | accepted |

## 外部来源

- [维基数据：曹氏（Q65865711）](https://www.wikidata.org/wiki/Q65865711)
- [维基数据：王诏（Q15928211）](https://www.wikidata.org/wiki/Q15928211)
- [CBDB 中国历代人物传记资料库：曹氏（338009）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338009&o=json)
- [CBDB 中国历代人物传记资料库：王詔（67938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67938&o=json)
