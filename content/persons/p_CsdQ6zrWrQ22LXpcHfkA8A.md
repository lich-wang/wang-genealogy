---
schema: wang-person/v1
id: p_CsdQ6zrWrQ22LXpcHfkA8A
status: active
merged_into: null
display_name: 邵淵亮
revision: 1
cbdb_id: 118118
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7yQuqKcl7CFSpCdrkttgUl
        subject_person_id: p_CsdQ6zrWrQ22LXpcHfkA8A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 邵淵亮
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wr0hhjoqJPK-5MMlAE6YG4
          claim_id: c_7yQuqKcl7CFSpCdrkttgUl
          source_id: s_4RiCCl3gxBNh7ujARffik5
          stance: supports
          locator: CBDB:118118
          quotation: null
          interpretation_note: CBDB 明确记录的王謝配偶
          source: &a1
            id: s_4RiCCl3gxBNh7ujARffik5
            source_type: api_record
            title: 中国历代人物传记资料库：邵淵亮（CBDB 118118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118118&o=json
            external_identifier: CBDB:118118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_YPjOCZAUQTnZaHDPNy4eJ3
        subject_person_id: p_Mb79fZrWskuRC8726StBaj
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_CsdQ6zrWrQ22LXpcHfkA8A
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NS6RP3aEWLzM7GPweaYQlv
          claim_id: c_YPjOCZAUQTnZaHDPNy4eJ3
          source_id: s_4RiCCl3gxBNh7ujARffik5
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1940, HuWenKai #256：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Mb79fZrWskuRC8726StBaj
        status: active
        display_name: 王謝
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 邵淵亮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 邵淵亮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Mb79fZrWskuRC8726StBaj | 王謝 | accepted |

## 外部来源

- [中国历代人物传记资料库：邵淵亮（CBDB 118118）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118118&o=json)
