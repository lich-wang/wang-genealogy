---
schema: wang-person/v1
id: p_2tigx8wrtYVEky82kcH7xs
status: active
merged_into: null
display_name: 王石溪
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eyVDCA86gXQQLUmfpPQJMm
        subject_person_id: p_2tigx8wrtYVEky82kcH7xs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王石溪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ku4DWFAkmGbFm8amDB5je4
          claim_id: c_eyVDCA86gXQQLUmfpPQJMm
          source_id: s_2JPRU11JCuQ9Y4hTUDQoA9
          stance: supports
          locator: CBDB:527382
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（527382）
          source: &a1
            id: s_2JPRU11JCuQ9Y4hTUDQoA9
            source_type: api_record
            title: 中国历代人物传记资料库：王石溪（CBDB 527382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527382&o=json
            external_identifier: CBDB:527382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.346Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rHHmuCwTEDhx9H1w1u1tLX
        subject_person_id: p_2tigx8wrtYVEky82kcH7xs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王石溪，史料所见人物。本项目依据《中国历代人物传记资料库：王石溪（CBDB 527382）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZUyqDo1CesEvkhgV5_jRwu
          claim_id: c_rHHmuCwTEDhx9H1w1u1tLX
          source_id: s_2JPRU11JCuQ9Y4hTUDQoA9
          stance: supports
          locator: CBDB:527382
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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
  descendants:
    - claim:
        id: c_SJZq811rOGCJRyPcOuIbz4
        subject_person_id: p_2tigx8wrtYVEky82kcH7xs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2LZsVShN931yXZMrQr8ka2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8HFTDZ-WxGpN5k0Fzlh7nG
          claim_id: c_SJZq811rOGCJRyPcOuIbz4
          source_id: s_eCqLAt765eqmLNLZCcUgSa
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13619：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eCqLAt765eqmLNLZCcUgSa
            source_type: api_record
            title: 中国历代人物传记资料库：王家屏（CBDB 123935）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123935&o=json
            external_identifier: CBDB:123935
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.939Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2LZsVShN931yXZMrQr8ka2
        status: active
        display_name: 王家屏
        merged_into_person_id: null
  other: []
---

# 王石溪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王石溪 | accepted |
| bio.summary | 王石溪，史料所见人物。本项目依据《中国历代人物传记资料库：王石溪（CBDB 527382）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2LZsVShN931yXZMrQr8ka2 | 王家屏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王家屏（CBDB 123935）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123935&o=json)
- [中国历代人物传记资料库：王石溪（CBDB 527382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527382&o=json)
